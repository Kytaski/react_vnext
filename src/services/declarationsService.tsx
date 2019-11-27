import React from 'react'
import axios from 'axios'
import { EVersionCahierTechnique, EDepot, EDsnModele, EStatut, IDeclarationsHeaderDto } from '../models/IDeclarationsHeaderDto';

export function getAllDeclarations(): IDeclarationsHeaderDto[] {
    return [
        {
          versionCT: EVersionCahierTechnique.P20V01,
          dateCreation: new Date(),
          depot: EDepot.General,
          dsnModele: EDsnModele.Mensuelle,
          fraction: 1,
          ordre: 1,
          periode: new Date("2020-02-17T00:00:00"),
          siret: "15236489512",
          status: EStatut.Creer,
          etablissement: "Cegid Lyon"
        },
        {
          versionCT: EVersionCahierTechnique.P19V01,
          dateCreation: new Date(),
          depot: EDepot.MSA,
          dsnModele: EDsnModele.SignalementFinContrat,
          fraction: 1,
          ordre: 1,
          periode: new Date("2020-02-17T00:00:00"),
          siret: "245786311125",
          status: EStatut.Recu,
          etablissement: "Printemps Bellecour"
        },
        {
          versionCT: EVersionCahierTechnique.P19V01,
          dateCreation: new Date(),
          depot: EDepot.MSA,
          dsnModele: EDsnModele.SignalementFinContrat,
          fraction: 1,
          ordre: 1,
          periode: new Date("2020-02-17T00:00:00"),
          siret: "451698745236",
          status: EStatut.Recu,
          etablissement: "Burger King"
        },
        {
          versionCT: EVersionCahierTechnique.P19V01,
          dateCreation: new Date(),
          depot: EDepot.MSA,
          dsnModele: EDsnModele.SignalementFinContrat,
          fraction: 1,
          ordre: 1,
          periode: new Date("2020-02-17T00:00:00"),
          siret: "798795615674",
          status: EStatut.Recu,
          etablissement: "Accpa Lyon"
        }
      ];
}