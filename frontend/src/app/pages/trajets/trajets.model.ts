export interface Trajets {
  idTrajet: string;
  idBus: string;
  idLigne: string;
  dateDepart: string;
  dateArrivee: string;
  statutTrajet: string;
  createdAt: string;
}

export interface AffectationLigne {
  readonly idTrajet: string;
  readonly idBus: string;
  readonly numeroBus: string;
  readonly immatriculation: string;
  readonly idLigne: string;
  readonly numeroLigne: string;
  readonly nomLigne: string;
  readonly dateDepart: string;
  readonly statutTrajet: string;
}
