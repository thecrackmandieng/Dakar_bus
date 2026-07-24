import { Injectable, OnDestroy, computed, inject, signal } from '@angular/core';
import { VueBusTempsReel } from '../pages/vue-bus-temps-reel/vue-bus-temps-reel.model';
import { VueBusTempsReelService } from '../pages/vue-bus-temps-reel/vue-bus-temps-reel.service';
import { RealtimeService } from './realtime.service';
import { LignesService } from '../pages/lignes/lignes.service';

export interface FleetVehicle {
  readonly id: string;
  readonly busNumber: string;
  readonly registration: string;
  readonly lineNumber: string;
  readonly lineName: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number;
  readonly passengers: number;
  readonly capacity: number;
  readonly updatedAt: string;
}

@Injectable({ providedIn: 'root' })
export class FleetService implements OnDestroy {
  private readonly api = inject(VueBusTempsReelService);
  private readonly realtime = inject(RealtimeService);
  private readonly linesApi = inject(LignesService);
  private readonly databaseVehicles = signal<FleetVehicle[]>([]);
  private readonly lineNames = signal(new Map<string, string>());
  private readonly refreshTimer = window.setInterval(() => void this.refresh(), 5000);

  readonly vehicles = computed(() => {
    const sensor = this.realtime.telemetry();
    const vehicles = this.databaseVehicles();
    if (!sensor?.gps.fiable || sensor.gps.latitude === null || sensor.gps.longitude === null) {
      return vehicles;
    }

    const assignedVehicle = vehicles.find(({ id, busNumber }) => id === sensor.busId || busNumber === sensor.busId);
    const lineNumber = assignedVehicle?.lineNumber ?? sensor.lineNumber ?? '';

    const current: FleetVehicle = {
      id: sensor.busId,
      busNumber: assignedVehicle?.busNumber ?? sensor.busId,
      registration: assignedVehicle?.registration ?? 'Non renseignée',
      lineNumber,
      lineName: assignedVehicle?.lineName ?? this.lineNames().get(lineNumber) ?? 'Ligne non affectée',
      latitude: sensor.gps.latitude,
      longitude: sensor.gps.longitude,
      speed: sensor.gps.vitesse ?? 0,
      passengers: sensor.passengers.passagers,
      capacity: assignedVehicle?.capacity ?? sensor.capacity,
      updatedAt: sensor.updatedAt
    };
    return [current, ...vehicles.filter(({ id, busNumber }) => id !== current.id && busNumber !== current.busNumber)];
  });

  constructor() {
    void this.refresh();
  }

  ngOnDestroy(): void {
    window.clearInterval(this.refreshTimer);
  }

  private async refresh(): Promise<void> {
    try {
      const [rows, lines] = await Promise.all([this.api.list(), this.linesApi.list()]);
      this.lineNames.set(new Map(lines.filter(({ actif }) => actif).map(({ numeroLigne, nomLigne }) => [numeroLigne, nomLigne])));
      this.databaseVehicles.set(rows.map((row) => this.toVehicle(row)));
    } catch {
      // Le flux du capteur local reste disponible si la vue flotte est momentanément indisponible.
    }
  }

  private toVehicle(row: VueBusTempsReel): FleetVehicle {
    return {
      id: String(row.idBus),
      busNumber: row.numeroBus,
      registration: row.immatriculation,
      lineNumber: row.numeroLigne,
      lineName: row.nomLigne,
      latitude: row.latitude === null || row.latitude === undefined ? Number.NaN : Number(row.latitude),
      longitude: row.longitude === null || row.longitude === undefined ? Number.NaN : Number(row.longitude),
      speed: Number(row.vitesse),
      passengers: Number(row.nombrePassagers),
      capacity: Number(row.capaciteMax),
      updatedAt: row.datePosition
    };
  }
}
