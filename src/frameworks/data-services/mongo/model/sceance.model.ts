import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SceanceDocument = Sceance & Document;
@Schema()
export class Sceance {
  @Prop()
  titre: string;

  @Prop()
  entraineur: string;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  DateEntrainement: Date;

  @Prop()
  heure: string;
  //model and entity should have same types : i assumed its an array so change if not
  @Prop()
  presence: string[];

  @Prop()
  type: string;
}
export const SceanceSchema = SchemaFactory.createForClass(Sceance);
