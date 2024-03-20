import { Role } from "src/core/roles/role.enum";

export class User {
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
   
}

export { Role };
