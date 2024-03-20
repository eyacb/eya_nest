import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
interface Joueur {
    id: number;
    nom: string;
  }
export type CompetitionDocument=Competition & Document;
@Schema()
export class Competition  {

    @Prop()
    nom: string;

    @Prop({ default: Date.now })
    dateDebut: Date;

    @Prop({ default: Date.now })
    dateFin:Date;

    @Prop()
    score:number[];

    @Prop()
    joueurs: Joueur[];
}
export const CompetitionSchema= SchemaFactory.createForClass(Competition);