export interface ModuleGps {
  readonly idModule: string;
  readonly identifiantModule: string;
  readonly nomModule: string;
  readonly idBus: string | null;
  readonly actif: boolean;
  readonly dateAffectation: string | null;
  readonly createdAt: string;
  readonly numeroBus: string | null;
  readonly immatriculation: string | null;
  readonly idLigne: string | null;
  readonly numeroLigne: string | null;
  readonly nomLigne: string | null;
}

export interface ConnectedGpsModule {
  readonly identifiantModule: string;
  readonly portSerie: string;
  readonly connecte: boolean;
  readonly idBus: string | null;
}
