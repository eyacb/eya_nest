import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "src/core/roles/role.enum";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ enum: Object.values(Role), default: Role.User })
  role: Role;

  @Prop()
  birthDate: string;

  @Prop()
  avatar: string;

  @Prop()
  gender: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  twoFactorCode: string;

  @Prop()
  twoFactorExpiration: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
