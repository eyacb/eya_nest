export interface AssignMarquerDto {
    nomParticipant: string;
    nomMarqueur: string;
  }
  export class AssignMarquerDto {
    readonly userId: string;
    readonly competitionId: string;
    readonly marquerId: string;
  }