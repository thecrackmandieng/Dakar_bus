import { Injectable, OnDestroy, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { FleetApiRow, MobileVehicle, VehicleTelemetry } from './fleet.model';

@Injectable({ providedIn: 'root' })
export class FleetService implements OnDestroy {
  readonly vehicles = signal<MobileVehicle[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly lastUpdate = signal<Date | null>(null);
  private readonly refreshTimer = window.setInterval(() => void this.refresh(), 5000);
  private readonly realtimeEvents = new EventSource(`${environment.apiUrl}/realtime/stream`);
  private refreshInProgress = false;
  private latestTelemetry: VehicleTelemetry | null = null;

  constructor() {
    this.realtimeEvents.onmessage = ({ data }) => {
      try {
        const telemetry = JSON.parse(data) as VehicleTelemetry;
        this.latestTelemetry = telemetry;
        this.vehicles.update((vehicles) => vehicles.map((vehicle) => vehicle.id === telemetry.busId
          ? withLoadState({
            ...vehicle,
            latitude: telemetry.gps.fiable && telemetry.gps.latitude !== null ? telemetry.gps.latitude : vehicle.latitude,
            longitude: telemetry.gps.fiable && telemetry.gps.longitude !== null ? telemetry.gps.longitude : vehicle.longitude,
            speed: Number(telemetry.gps.vitesse ?? vehicle.speed),
            updatedAt: telemetry.updatedAt
          }, Number(telemetry.passengers.passagers))
          : vehicle));
        this.lastUpdate.set(new Date());
      } catch {
        this.error.set('Données temps réel invalides.');
      }
    };
    void this.refresh();
  }

  ngOnDestroy(): void {
    window.clearInterval(this.refreshTimer);
    this.realtimeEvents.close();
  }

  async refresh(): Promise<void> {
    if (this.refreshInProgress) {
      return;
    }
    this.refreshInProgress = true;
    try {
      const response = await fetch(`${environment.apiUrl}/vue-bus-temps-reel`);
      if (!response.ok) {
        throw new Error('Le réseau de bus est momentanément indisponible.');
      }
      const rows = await response.json() as FleetApiRow[];
      this.vehicles.set(rows.filter((row) => row.latitude !== null && row.longitude !== null && Number.isFinite(Number(row.latitude)) && Number.isFinite(Number(row.longitude))).map((row) => {
        const capacity = Number(row.capaciteMax);
        const liveTelemetry = this.latestTelemetry?.busId === row.idBus ? this.latestTelemetry : null;
        return withLoadState({
          id: row.idBus,
          busNumber: row.numeroBus,
          registration: row.immatriculation,
          capacity,
          lineNumber: row.numeroLigne ?? '—',
          lineName: row.nomLigne ?? 'Ligne non affectée',
          latitude: liveTelemetry?.gps.fiable && liveTelemetry.gps.latitude !== null ? liveTelemetry.gps.latitude : Number(row.latitude),
          longitude: liveTelemetry?.gps.fiable && liveTelemetry.gps.longitude !== null ? liveTelemetry.gps.longitude : Number(row.longitude),
          speed: Number(liveTelemetry?.gps.vitesse ?? row.vitesse ?? 0),
          passengers: 0,
          occupancy: 0,
          progress: 0,
          state: 'available',
          stateLabel: 'Disponible',
          updatedAt: liveTelemetry?.updatedAt ?? row.datePosition ?? ''
        }, Number(liveTelemetry?.passengers.passagers ?? row.nombrePassagers ?? 0));
      }));
      this.error.set('');
      this.lastUpdate.set(new Date());
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Connexion impossible.');
    } finally {
      this.loading.set(false);
      this.refreshInProgress = false;
    }
  }
}

function withLoadState(vehicle: MobileVehicle, passengers: number): MobileVehicle {
  const occupancy = vehicle.capacity > 0 ? Math.round(passengers / vehicle.capacity * 100) : 0;
  const state = passengers > vehicle.capacity ? 'overloaded' : passengers === vehicle.capacity ? 'full' : 'available';
  return {
    ...vehicle,
    passengers,
    occupancy,
    progress: Math.min(occupancy / 100, 1),
    state,
    stateLabel: state === 'overloaded' ? 'Surcharge' : state === 'full' ? 'Plein' : 'Disponible'
  };
}
