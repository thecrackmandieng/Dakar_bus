import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { EventEmitter } from 'node:events';
import { create as createGpsPosition } from './services/positions-gps.service.js';

export const telemetryEvents = new EventEmitter();

const SERIAL_PORT_PATH =
  process.env.ESP32_SERIAL_PORT || '/dev/cu.usbserial-0001';

const SERIAL_BAUD_RATE = Number(
  process.env.ESP32_SERIAL_BAUD_RATE || 115200
);
const BUS_ID = process.env.BUS_ID?.trim() || 'BUS_NON_CONFIGURE';
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const HAS_VALID_BUS_ID = UUID_PATTERN.test(BUS_ID);
const RAW_ACTIVE_TRIP_ID = process.env.ACTIVE_TRIP_ID?.trim();
const ACTIVE_TRIP_ID = RAW_ACTIVE_TRIP_ID && UUID_PATTERN.test(RAW_ACTIVE_TRIP_ID) ? RAW_ACTIVE_TRIP_ID : null;
const GPS_SAVE_INTERVAL_MS = Math.max(Number(process.env.GPS_SAVE_INTERVAL_MS) || 5000, 1000);

const gpsData = {
  latitude: null,
  longitude: null,
  vitesse: null,
  altitude: null,
  satellites: 0,
  precision: null,
  heureUtc: null,
  fiable: false
};

const passengerData = {
  passagers: 0,
  entrees: 0,
  sorties: 0,
  dernierEvenement: null
};

export function getTelemetry() {
  return {
    busId: BUS_ID,
    lineNumber: null,
    capacity: Number(process.env.BUS_CAPACITY || 50),
    gps: { ...gpsData },
    passengers: { ...passengerData },
    updatedAt: new Date().toISOString()
  };
}

export function resetPassengerCounter(busId) {
  if (busId !== BUS_ID) {
    return false;
  }

  passengerData.passagers = 0;
  passengerData.entrees = 0;
  passengerData.sorties = 0;
  passengerData.dernierEvenement = 'Compteur initialisé par l’administrateur';
  if (serialPort.isOpen) {
    serialPort.write('RESET_COUNTER\n', (error) => {
      if (error) {
        console.error('Commande de remise à zéro ESP32 non transmise :', error.message);
      }
    });
  }
  publishTelemetry();
  return true;
}

function publishTelemetry() {
  telemetryEvents.emit('telemetry', getTelemetry());
}

let isReceivingBlock = false;
let lastGpsSaveAt = 0;

const serialPort = new SerialPort({
  path: SERIAL_PORT_PATH,
  baudRate: SERIAL_BAUD_RATE,
  autoOpen: true
});

const parser = serialPort.pipe(
  new ReadlineParser({
    delimiter: '\n'
  })
);

serialPort.on('open', () => {
  console.log('========================================');
  console.log(' ESP32 connecté');
  console.log('========================================');
  console.log(`Port     : ${serialPort.path}`);
  console.log(`Baud rate: ${SERIAL_BAUD_RATE}`);
  console.log('Réception GPS et comptage passagers...\n');
  if (!HAS_VALID_BUS_ID) {
    console.warn('BUS_ID absent ou invalide : les positions GPS ne seront pas enregistrées en base.');
  }
});

parser.on('data', (line) => {
  const value = line.trim();

  if (!value) {
    return;
  }

  if (value === '------------------------------') {
    if (isReceivingBlock) {
      displayCurrentState();
      const now = Date.now();
      const canSavePosition = HAS_VALID_BUS_ID && gpsData.fiable && Number.isFinite(gpsData.latitude) && Number.isFinite(gpsData.longitude) && now - lastGpsSaveAt >= GPS_SAVE_INTERVAL_MS;
      if (canSavePosition) {
        lastGpsSaveAt = now;
        void createGpsPosition({
          idBus: BUS_ID,
          idTrajet: ACTIVE_TRIP_ID,
          latitude: gpsData.latitude,
          longitude: gpsData.longitude,
          vitesse: gpsData.vitesse ?? 0,
          direction: null,
          datePosition: new Date(now).toISOString()
        }).catch((error) => {
          lastGpsSaveAt = 0;
          console.error('Enregistrement GPS impossible :', error.message);
        });
      }
    }

    isReceivingBlock = !isReceivingBlock;
    return;
  }

  if (value.includes('PASSAGER ENTRÉ')) {
    passengerData.dernierEvenement = 'Entrée';
    console.log('\n🟢 Entrée détectée');
    return;
  }

  if (value.includes('PASSAGER SORTI')) {
    passengerData.dernierEvenement = 'Sortie';
    console.log('\n🔴 Sortie détectée');
    return;
  }

  if (value.startsWith('Capteur A détecté')) {
    console.log('Capteur A activé : entrée possible');
    return;
  }

  if (value.startsWith('Capteur B détecté')) {
    console.log('Capteur B activé : sortie possible');
    return;
  }

  if (
    value.includes('Entrée annulée') ||
    value.includes('Sortie annulée')
  ) {
    console.log(`Passage incomplet : ${value}`);
    return;
  }

  if (value === 'Position GPS non fiable') {
    gpsData.fiable = false;
    return;
  }

  const [rawKey, ...rawValueParts] = value.split(':');

  if (!rawKey || rawValueParts.length === 0) {
    console.log(value);
    return;
  }

  const key = rawKey.trim().toLowerCase();
  const rawValue = rawValueParts.join(':').trim();

  switch (key) {
    case 'latitude':
      gpsData.latitude = parseNumber(rawValue);
      gpsData.fiable = true;
      break;

    case 'longitude':
      gpsData.longitude = parseNumber(rawValue);
      break;

    case 'vitesse':
      gpsData.vitesse = parseNumber(rawValue);
      break;

    case 'altitude':
      gpsData.altitude = parseNumber(rawValue);
      break;

    case 'satellites':
      gpsData.satellites = parseInteger(rawValue);
      break;

    case 'précision':
    case 'precision':
      gpsData.precision = parseNumber(rawValue);
      break;

    case 'heure utc':
      gpsData.heureUtc = rawValue;
      break;

    case 'passagers':
    case 'passagers à bord':
      passengerData.passagers = parseInteger(rawValue);
      break;

    case 'entrées':
    case 'total entrées':
      passengerData.entrees = parseInteger(rawValue);
      break;

    case 'sorties':
    case 'total sorties':
      passengerData.sorties = parseInteger(rawValue);
      break;

    default:
      console.log(value);
  }

  publishTelemetry();
});

serialPort.on('error', (error) => {
  console.error('Erreur série :', error.message);
});

serialPort.on('close', () => {
  console.log('ESP32 déconnecté');
});

process.on('SIGINT', () => {
  console.log('\nFermeture de la connexion série...');

  if (!serialPort.isOpen) {
    process.exit(0);
  }

  serialPort.close((error) => {
    if (error) {
      console.error(
        'Erreur pendant la fermeture du port :',
        error.message
      );
    }

    process.exit(error ? 1 : 0);
  });
});

function displayCurrentState() {
  console.log('\n========================================');
  console.log(' ÉTAT DU BUS');
  console.log('========================================');

  console.log(`Passagers  : ${passengerData.passagers}`);
  console.log(`Entrées    : ${passengerData.entrees}`);
  console.log(`Sorties    : ${passengerData.sorties}`);

  if (passengerData.dernierEvenement) {
    console.log(
      `Événement   : ${passengerData.dernierEvenement}`
    );
  }

  console.log('----------------------------------------');

  if (!gpsData.fiable) {
    console.log('Position GPS : non fiable');
    console.log(`Satellites   : ${gpsData.satellites}`);

    if (gpsData.precision !== null) {
      console.log(
        `Précision    : ${gpsData.precision.toFixed(2)}`
      );
    }

    console.log('========================================\n');
    return;
  }

  console.log(
    `Latitude   : ${formatNumber(gpsData.latitude, 6)}`
  );

  console.log(
    `Longitude  : ${formatNumber(gpsData.longitude, 6)}`
  );

  console.log(
    `Vitesse    : ${formatNumber(gpsData.vitesse, 2)} km/h`
  );

  console.log(
    `Altitude   : ${formatNumber(gpsData.altitude, 2)} m`
  );

  console.log(`Satellites : ${gpsData.satellites}`);

  console.log(
    `Précision  : ${formatNumber(gpsData.precision, 2)}`
  );

  console.log(
    `Heure UTC  : ${gpsData.heureUtc || 'Indisponible'}`
  );

  console.log('========================================\n');
}

function parseNumber(value) {
  const parsedValue = Number.parseFloat(
    value.replace(',', '.')
  );

  return Number.isFinite(parsedValue)
    ? parsedValue
    : null;
}

function parseInteger(value) {
  const parsedValue = Number.parseInt(value, 10);

  return Number.isInteger(parsedValue)
    ? parsedValue
    : 0;
}

function formatNumber(value, decimals) {
  return Number.isFinite(value)
    ? value.toFixed(decimals)
    : 'Indisponible';
}
