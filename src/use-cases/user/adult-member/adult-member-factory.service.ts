import { Injectable } from "@nestjs/common";
import { UserFactoryService } from "../user-factory.service";
import { CreateUserDto, UpdateUserDto } from "src/core/dtos/users/user.dto";
import { AdultMember } from "src/core/entities/users/adult-member.entity";

@Injectable()
export class AdultMemberFactoryService extends UserFactoryService { 
  createNewAdultMember(createUserDto: CreateUserDto) {
    const newAdultMember = new AdultMember(); 
    newAdultMember.firstName = createUserDto.firstName;
    newAdultMember.lastName = createUserDto.lastName;
    newAdultMember.email = createUserDto.email;
    newAdultMember.password = createUserDto.password;
    newAdultMember.role = createUserDto.role;
    newAdultMember.birthDate = createUserDto.birthDate;
    newAdultMember.gender = createUserDto.gender;
    newAdultMember.phoneNumber = createUserDto.phoneNumber;
    newAdultMember.avatar = createUserDto.avatar;
    return newAdultMember;
  }

  updateAdultMember(updateUserDto: UpdateUserDto) {
    const updatedAdultMember = new AdultMember(); 
    updatedAdultMember.firstName = updateUserDto.firstName;
    updatedAdultMember.lastName = updateUserDto.lastName;
    updatedAdultMember.birthDate = updateUserDto.birthDate;
    updatedAdultMember.gender = updateUserDto.gender;
    updatedAdultMember.role = updateUserDto.role;
    updatedAdultMember.phoneNumber = updateUserDto.phoneNumber;
    updatedAdultMember.avatar = updateUserDto.avatar;
    updatedAdultMember.updatedAt = new Date();

    return updatedAdultMember;
  }
}
