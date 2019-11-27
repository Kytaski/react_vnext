import { IEtablissement } from "./IEtablissement";
import { IAdhesionPrevoyance } from "./IAdhesionPrevoyance";
import { ICotisationEtablissement } from "./ICotisationEtablissement";
import { IAssujettissementFiscal } from "./IAssujettissementFiscal";

export interface IEntreprise {
  siren: string;
  nic: string;
  apenCode: string;
  etablissement: IEtablissement;
  adhesionPrevoyance: Array<IAdhesionPrevoyance>;
  cotisationEtablissement: Array<ICotisationEtablissement>;
  assujettissementFiscal: Array<IAssujettissementFiscal>;
}
