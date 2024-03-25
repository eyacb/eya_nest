export interface Participant {
  id: number;
  name: string;
  handicap: number;
  score: number;
  scoreSigned: boolean;
}
export class Competition {

  id: number;
  date: Date;
  organizer: string;
  name: string;
  startTime: string;
  endTime: string;
  participationFee: number;
  feeType: string;
  packaging: string[];
  registrationStatus: boolean;
  paymentStatus: boolean;
  signatureStatus: boolean;
  startListStatus: boolean;
  resultStatus: boolean;
  multiDayStatus: boolean;
  multiDayFeeStatus: boolean;
  participants: Participant[];

}


/*
  id: number;
  date: Date;
  organizer: string;
  name: string;
  startTime: string;
  endTime: string;
  participationFee: number;
  feeType: string;
  packaging: string[];
  registrationStatus: boolean;
  paymentStatus: boolean;
  signatureStatus: boolean;
  startListStatus: boolean;
  resultStatus: boolean;
  multiDayStatus: boolean;
  multiDayFeeStatus: boolean;
  participants: Participant[];

  */