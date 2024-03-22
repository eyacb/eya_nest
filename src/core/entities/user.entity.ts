import { Types } from "mongoose";
import { Role } from "src/core/roles/role.enum";

export class User {
  userId: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  birthDate: string;
  avatar: string;
  gender: string;
  phoneNumber: string;
  twoFactorCode: string;
  twoFactorExpiration: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
   
  constructor(props: Partial<User>) {
    this.userId= props.userId|| null;
    this.firstName = props.firstName || null;
    this.lastName = props.lastName || null;
    this.email = props.email || null;
    this.password = props.password || null;
    this.role = props.role || null;
    this.birthDate = props.birthDate || null;
    this.avatar = props.avatar || null;
    this.gender = props.gender || null;
    this.phoneNumber = props.phoneNumber || null;
    this.twoFactorCode = props.twoFactorCode || null;
    this.twoFactorExpiration = props.twoFactorExpiration || null;
    this.createdAt = props.createdAt || null;
    this.updatedAt = props.updatedAt || null;
    this.deletedAt = props.deletedAt || null;
  }
}

export { Role };
