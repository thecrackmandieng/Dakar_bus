export type BusLoadState = 'available' | 'full' | 'overloaded';

export interface FleetApiRow {
  readonly idBus: string;
  readonly numeroBus: string;
  readonly immatriculation: string;
  readonly capaciteMax: number;
  readonly numeroLigne: string | null;
  readonly nomLigne: string | null;
  readonly latitude: number | null;
  readonly longitude: number | null;
  readonly vitesse: number | null;
  readonly datePosition: string | null;
  readonly nombrePassagers: number | null;
}

export interface MobileVehicle {
  readonly id: string;
  readonly busNumber: string;
  readonly registration: string;
  readonly capacity: number;
  readonly lineNumber: string;
  readonly lineName: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number;
  readonly passengers: number;
  readonly occupancy: number;
  readonly progress: number;
  readonly state: BusLoadState;
  readonly stateLabel: string;
  readonly updatedAt: string;
}

export interface VehicleTelemetry {
  readonly busId: string;
  readonly gps: {
    readonly latitude: number | null;
    readonly longitude: number | null;
    readonly vitesse: number | null;
    readonly fiable: boolean;
  };
  readonly passengers: {
    readonly passagers: number;
  };
  readonly updatedAt: string;
}
