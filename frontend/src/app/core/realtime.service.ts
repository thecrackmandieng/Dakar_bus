import { Injectable, OnDestroy, signal } from '@angular/core';
import { environment } from '../../environments/environment';

export interface VehicleTelemetry {
  readonly busId: string;
  readonly lineNumber: string | null;
  readonly capacity: number;
  readonly gps: {
    readonly latitude: number | null;
    readonly longitude: number | null;
    readonly vitesse: number | null;
    readonly satellites: number;
    readonly fiable: boolean;
  };
  readonly passengers: {
    readonly passagers: number;
    readonly entrees: number;
    readonly sorties: number;
    readonly dernierEvenement: string | null;
  };
  readonly updatedAt: string;
}

@Injectable({ providedIn: 'root' })
export class RealtimeService implements OnDestroy {
  readonly telemetry = signal<VehicleTelemetry | null>(null);
  readonly connected = signal(false);
  private readonly events = new EventSource(`${environment.apiUrl}/realtime/stream`);

  constructor() {
    this.events.onopen = () => this.connected.set(true);
    this.events.onerror = () => this.connected.set(false);
    this.events.onmessage = ({ data }) => this.telemetry.set(JSON.parse(data) as VehicleTelemetry);
  }

  async resetPassengerCounter(busId: string): Promise<void> {
    const response = await fetch(`${environment.apiUrl}/realtime/buses/${encodeURIComponent(busId)}/reset-counter`, { method: 'POST' });
    if (!response.ok) {
      const result = await response.json().catch(() => null) as { message?: string } | null;
      throw new Error(result?.message ?? 'Initialisation du compteur impossible.');
    }
  }

  ngOnDestroy(): void {
    this.events.close();
  }
}
