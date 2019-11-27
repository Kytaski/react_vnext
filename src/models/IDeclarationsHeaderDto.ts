export interface IDeclarationsHeaderDto {
  versionCT: EVersionCahierTechnique;
  dsnModele: EDsnModele;
  siret: string;
  periode: Date;
  fraction: number;
  ordre: number;
  dateCreation: Date;
  status: EStatut;
  depot: EDepot;
  etablissement: string;
}

export enum EDsnModele {
  Mensuelle = 1,
  SignalementFinContrat = 2,
  SignalementArretTravail = 4,
  SignalementReprisSuiteArretDeTRavail = 5,
  SignalementFinContratTravailUnique = 6,
  SignalementAmorcageDonneesVariables = 7
}

export enum EVersionCahierTechnique {
  P19V01 = 0,
  P20V01 = 1
}

export enum EDepot {
  General = 1,
  MSA = 2
}

export enum EStatut {
  Creer = 1,
  Envoye = 2,
  Recu = 3
}
