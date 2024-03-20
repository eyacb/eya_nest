interface Joueur {
    id: number;
    nom: string;
  }
export class Competition {
    
    nom: string;
    dateDebut: Date;
    dateFin: Date;
    score: number[];
    joueurs: Joueur[];
}