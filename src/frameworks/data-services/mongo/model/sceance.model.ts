import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SceanceDocument=Sceance & Document;
@Schema()
export class Sceance  {

    @Prop()
    titre: string;

    @Prop()
    entraineur:String;

    @Prop()
    description: String;

    @Prop()
    heure:String;

    @Prop()
    presence:String[];

    @Prop()
    type:String;

    
}
export const SceanceSchema= SchemaFactory.createForClass(Sceance);