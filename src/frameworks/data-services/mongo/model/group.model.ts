import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type GroupDocument=Group & Document;
@Schema()
export class Group  {

    @Prop()
    entraineur:String;

    @Prop()
    joueurs:String[];

    @Prop()
    niveau:String;

    @Prop()
    nom:String;

    @Prop()
    age:number[];


    
}
export const GroupSchema= SchemaFactory.createForClass(Group);