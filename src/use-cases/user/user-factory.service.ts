import { Injectable } from "@nestjs/common";
import { User } from "../../core/entities";
import { CreateUserDto, UpdateUserDto } from "../../core/dtos";

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role,
      birthDate: createUserDto.birthDate,
      gender: createUserDto.gender,
      phoneNumber: createUserDto.phoneNumber,
      avatar: createUserDto.avatar,
    });
    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const updatedUser = new User({
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName,
      birthDate: updateUserDto.birthDate,
      gender: updateUserDto.gender,
      role: updateUserDto.role,
      phoneNumber: updateUserDto.phoneNumber,
      avatar: updateUserDto.avatar,
      updatedAt: new Date(),
    });
    return updatedUser;
  }
}
