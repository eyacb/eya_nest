export interface InscrireParticipantDto {
    nomCompetition: string;
    nomParticipant: string;
  }
export class InscrireParticipantDto {
    readonly userId: string;
    readonly competitionId: string;
  }