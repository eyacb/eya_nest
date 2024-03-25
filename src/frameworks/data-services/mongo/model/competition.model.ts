import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export interface Participant {
  id: number;
  name: string;
  handicap: number;
  score: number;
  scoreSigned: boolean;
}

export type CompetitionDocument = Competition & Document;

@Schema()
export class Competition {
  @Prop()
  id: number;

  @Prop()
  date: Date;

  @Prop()
  organizer: string;

  @Prop()
  name: string;

  @Prop()
  startTime: string;

  @Prop()
  endTime: string;

  @Prop()
  participationFee: number;

  @Prop()
  feeType: string;

  @Prop()
  packaging: string[];

  @Prop()
  registrationStatus: boolean;

  @Prop()
  paymentStatus: boolean;

  @Prop()
  signatureStatus: boolean;

  @Prop()
  startListStatus: boolean;

  @Prop()
  resultStatus: boolean;

  @Prop()
  multiDayStatus: boolean;

  @Prop()
  multiDayFeeStatus: boolean;

  @Prop()
  participants: Participant[];
}

export const CompetitionSchema = SchemaFactory.createForClass(Competition);
