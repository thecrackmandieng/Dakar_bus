#include <Arduino.h>
#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

constexpr uint32_t USB_BAUD_RATE = 115200;
constexpr uint32_t GPS_BAUD_RATE = 9600;

constexpr int GPS_RX_PIN = 16;
constexpr int GPS_TX_PIN = 17;
constexpr int IR_SENSOR_A_PIN = 25;
constexpr int IR_SENSOR_B_PIN = 26;
// Brancher chaque LED avec une résistance de 220 à 330 ohms.
constexpr int GREEN_LED_PIN = 27;
constexpr int RED_LED_PIN = 32;
// Utiliser un buzzer actif piloté via un transistor, pas directement par le GPIO.
constexpr int BUZZER_PIN = 33;
constexpr int IR_ACTIVE_STATE = LOW;

constexpr unsigned long DISPLAY_INTERVAL_MS = 3000;
constexpr unsigned long SENSOR_DEBOUNCE_MS = 80;
constexpr unsigned long PASSAGE_TIMEOUT_MS = 1500;
constexpr unsigned long PASSAGE_RELEASE_MS = 250;
constexpr unsigned long MAX_GPS_DATA_AGE_MS = 5000;
constexpr unsigned long BUZZER_CYCLE_MS = 600;
constexpr unsigned long BUZZER_ON_DURATION_MS = 320;
constexpr uint32_t MIN_SATELLITES = 4;
constexpr double MAX_HDOP = 8.0;
constexpr int DEFAULT_BUS_CAPACITY = 50;

enum class PassageState {
  IDLE,
  A_FIRST,
  B_FIRST,
  WAIT_CLEAR
};

struct DebouncedSensor {
  const int pin;
  bool stableActive = false;
  bool rawActive = false;
  unsigned long rawChangedAt = 0;
};

TinyGPSPlus gps;
HardwareSerial gpsSerial(2);
DebouncedSensor sensorA{IR_SENSOR_A_PIN};
DebouncedSensor sensorB{IR_SENSOR_B_PIN};

PassageState passageState = PassageState::IDLE;
String serialCommand;
unsigned long passageStartedAt = 0;
unsigned long sensorsReleasedAt = 0;
unsigned long lastDisplayAt = 0;
int passengerCount = 0;
int busCapacity = DEFAULT_BUS_CAPACITY;
unsigned long totalEntries = 0;
unsigned long totalExits = 0;

void updateSensor(DebouncedSensor &sensor, unsigned long now) {
  const bool currentRawActive = digitalRead(sensor.pin) == IR_ACTIVE_STATE;

  if (currentRawActive != sensor.rawActive) {
    sensor.rawActive = currentRawActive;
    sensor.rawChangedAt = now;
  }

  if (now - sensor.rawChangedAt >= SENSOR_DEBOUNCE_MS) {
    sensor.stableActive = sensor.rawActive;
  }
}

void registerEntry() {
  passengerCount++;
  totalEntries++;
  Serial.println("PASSAGER ENTRÉ");
}

void registerExit() {
  if (passengerCount > 0) {
    passengerCount--;
  }
  totalExits++;
  Serial.println("PASSAGER SORTI");
}

void updatePassengerCounter(unsigned long now) {
  updateSensor(sensorA, now);
  updateSensor(sensorB, now);

  switch (passageState) {
    case PassageState::IDLE:
      if (sensorA.stableActive && !sensorB.stableActive) {
        passageState = PassageState::A_FIRST;
        passageStartedAt = now;
        Serial.println("Capteur A détecté : entrée possible");
      } else if (sensorB.stableActive && !sensorA.stableActive) {
        passageState = PassageState::B_FIRST;
        passageStartedAt = now;
        Serial.println("Capteur B détecté : sortie possible");
      } else if (sensorA.stableActive && sensorB.stableActive) {
        passageState = PassageState::WAIT_CLEAR;
      }
      break;

    case PassageState::A_FIRST:
      if (sensorB.stableActive) {
        registerEntry();
        passageState = PassageState::WAIT_CLEAR;
      } else if (now - passageStartedAt > PASSAGE_TIMEOUT_MS) {
        Serial.println("Entrée annulée : passage incomplet");
        passageState = PassageState::WAIT_CLEAR;
      }
      break;

    case PassageState::B_FIRST:
      if (sensorA.stableActive) {
        registerExit();
        passageState = PassageState::WAIT_CLEAR;
      } else if (now - passageStartedAt > PASSAGE_TIMEOUT_MS) {
        Serial.println("Sortie annulée : passage incomplet");
        passageState = PassageState::WAIT_CLEAR;
      }
      break;

    case PassageState::WAIT_CLEAR:
      if (!sensorA.stableActive && !sensorB.stableActive) {
        if (sensorsReleasedAt == 0) {
          sensorsReleasedAt = now;
        } else if (now - sensorsReleasedAt >= PASSAGE_RELEASE_MS) {
          passageState = PassageState::IDLE;
          sensorsReleasedAt = 0;
        }
      } else {
        sensorsReleasedAt = 0;
      }
      break;
  }
}

void processSerialCommands() {
  while (Serial.available() > 0) {
    const char character = static_cast<char>(Serial.read());

    if (character == '\n' || character == '\r') {
      serialCommand.trim();
      if (serialCommand == "RESET_COUNTER") {
        passengerCount = 0;
        totalEntries = 0;
        totalExits = 0;
        passageState = PassageState::IDLE;
        sensorsReleasedAt = 0;
        Serial.println("COMPTEUR RÉINITIALISÉ");
      } else if (serialCommand.startsWith("SET_CAPACITY:")) {
        const int receivedCapacity = serialCommand.substring(13).toInt();
        if (receivedCapacity > 0) {
          busCapacity = receivedCapacity;
          Serial.print("CAPACITÉ MISE À JOUR : ");
          Serial.println(busCapacity);
        } else {
          Serial.println("CAPACITÉ REJETÉE");
        }
      }
      serialCommand = "";
    } else if (serialCommand.length() < 64) {
      serialCommand += character;
    }
  }
}

void updateLoadIndicators(unsigned long now) {
  const bool overloaded = passengerCount > busCapacity;
  const bool canTakePassengers = passengerCount < busCapacity;
  digitalWrite(GREEN_LED_PIN, canTakePassengers ? HIGH : LOW);
  digitalWrite(RED_LED_PIN, overloaded ? HIGH : LOW);
  digitalWrite(BUZZER_PIN, overloaded && now % BUZZER_CYCLE_MS < BUZZER_ON_DURATION_MS ? HIGH : LOW);
}

void displayTelemetry(unsigned long now) {
  if (now - lastDisplayAt < DISPLAY_INTERVAL_MS) {
    return;
  }
  lastDisplayAt = now;

  const uint32_t satellites = gps.satellites.isValid() ? gps.satellites.value() : 0;
  const double hdop = gps.hdop.isValid() ? gps.hdop.hdop() : 99.99;
  const bool positionRecent = gps.location.isValid() && gps.location.age() <= MAX_GPS_DATA_AGE_MS;
  const bool gpsSignalAcceptable = satellites >= MIN_SATELLITES && hdop <= MAX_HDOP;

  Serial.println("------------------------------");
  Serial.print("Passagers à bord : ");
  Serial.println(passengerCount);
  Serial.print("Total entrées : ");
  Serial.println(totalEntries);
  Serial.print("Total sorties : ");
  Serial.println(totalExits);
  Serial.print("Capacité du bus : ");
  Serial.println(busCapacity);

  if (!positionRecent || !gpsSignalAcceptable) {
    Serial.println("Position GPS non fiable");
    Serial.print("Satellites : ");
    Serial.println(satellites);
    Serial.print("Précision : ");
    Serial.println(hdop, 2);
    Serial.println("------------------------------");
    return;
  }

  Serial.print("Latitude : ");
  Serial.println(gps.location.lat(), 6);
  Serial.print("Longitude : ");
  Serial.println(gps.location.lng(), 6);
  Serial.print("Vitesse : ");
  Serial.println(gps.speed.isValid() && gps.speed.age() <= MAX_GPS_DATA_AGE_MS ? (gps.speed.kmph() < 1.5 ? 0.0 : gps.speed.kmph()) : 0.0, 2);
  Serial.print("Altitude : ");
  Serial.println(gps.altitude.isValid() && gps.altitude.age() <= MAX_GPS_DATA_AGE_MS ? gps.altitude.meters() : 0.0, 2);
  Serial.print("Satellites : ");
  Serial.println(satellites);
  Serial.print("Précision : ");
  Serial.println(hdop, 2);
  Serial.print("Heure UTC : ");

  if (gps.time.isValid()) {
    if (gps.time.hour() < 10) Serial.print('0');
    Serial.print(gps.time.hour());
    Serial.print(':');
    if (gps.time.minute() < 10) Serial.print('0');
    Serial.print(gps.time.minute());
    Serial.print(':');
    if (gps.time.second() < 10) Serial.print('0');
    Serial.println(gps.time.second());
  } else {
    Serial.println("Indisponible");
  }

  Serial.println("------------------------------");
}

void setup() {
  Serial.begin(USB_BAUD_RATE);
  gpsSerial.begin(GPS_BAUD_RATE, SERIAL_8N1, GPS_RX_PIN, GPS_TX_PIN);
  pinMode(IR_SENSOR_A_PIN, INPUT_PULLUP);
  pinMode(IR_SENSOR_B_PIN, INPUT_PULLUP);
  pinMode(GREEN_LED_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(GREEN_LED_PIN, HIGH);
  digitalWrite(RED_LED_PIN, LOW);
  digitalWrite(BUZZER_PIN, LOW);

  delay(600);
  const uint64_t chipId = ESP.getEfuseMac();
  char moduleId[24];
  snprintf(moduleId, sizeof(moduleId), "ESP32-%04X%08X", static_cast<uint16_t>(chipId >> 32), static_cast<uint32_t>(chipId));

  Serial.println();
  Serial.print("ID MODULE: ");
  Serial.println(moduleId);
  Serial.println("Dakar Bus : GPS + compteur IR bidirectionnel");
}

void loop() {
  while (gpsSerial.available() > 0) {
    gps.encode(gpsSerial.read());
  }

  const unsigned long now = millis();
  processSerialCommands();
  updatePassengerCounter(now);
  updateLoadIndicators(now);
  displayTelemetry(now);
}
