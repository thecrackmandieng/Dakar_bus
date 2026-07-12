export interface ComptagesPassagers {
  idComptage: string;
  idBus: string;
  idTrajet: string;
  montees: number;
  descentes: number;
  comptageCapteur: number;
  comptageManuel: number;
  nombreTotal: number;
  sourceComptage: string;
  dateComptage: string;
}
