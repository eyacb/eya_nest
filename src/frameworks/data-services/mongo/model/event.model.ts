import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type EventDocument=Event & Document;
@Schema()
export class Event  {

    @Prop()
    titre: string;

    @Prop()
    discription: string;

    @Prop({ default: Date.now })
    dateDebut: Date;

    @Prop({ default: Date.now })
    dateFin:Date;

   
}
export const EventSchema= SchemaFactory.createForClass(Event);