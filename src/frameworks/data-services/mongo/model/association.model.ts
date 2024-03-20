import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AssociationDocument=Association & Document;
@Schema()
export class Association{

    @Prop()
    name: string;

    @Prop()
    email:string;

    @Prop()
    password:string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt:Date;

    @Prop()
    deletedAt:Date;
}
export const AssociationSchema= SchemaFactory.createForClass(Association);