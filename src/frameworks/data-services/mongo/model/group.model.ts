import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type GroupDocument = Group & Document;
@Schema()
export class Group {
  @Prop()
  entraineur: string;

  @Prop()
  joueurs: string[];

  @Prop()
  niveau: string;

  @Prop()
  nom: string;

  @Prop()
  age: number[];
}
export const GroupSchema = SchemaFactory.createForClass(Group);
