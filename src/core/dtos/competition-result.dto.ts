export interface CompetitionResultDto {
    nomCompetition: string;
    resultats: { [participant: string]: number };
  }
export class CompetitionResultDto {
    readonly competitionId: string;
    readonly results: any[]; // Define your result structure
  }