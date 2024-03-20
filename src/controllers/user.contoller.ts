import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";

import { UserUseCases } from "src/use-cases/user/user.use-case";
import {
  ApiBody,
  ApiTags,
  ApiParam,
  ApiBearerAuth,
  ApiConsumes,
} from "@nestjs/swagger";
import { RolesGuard } from "src/core/roles/roles.guard";
import { Role } from "src/core/roles/role.enum";
import { Roles } from "src/core/roles/role.decorator";
import { JwtAuthGuard } from "src/core/guards/jwtauth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { imageAndPdfFilter, storage } from "src/configuration/multer.config";
import { CreateUserDto, UpdateUserDto, UpdateUserPasswordDto } from "src/core/dtos/user.dto";
import { AssociationUseCases } from "src/use-cases/association/association.use-case";
import { MailerService } from "src/frameworks/mailer/mailer-services.service";

@ApiTags("api/user")
@Controller("api/user")
export class UserController {
  constructor(private userUseCases: UserUseCases,private mailerService: MailerService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin,Role.ResponsableAcademie,Role.ResponsableComp,Role.ResponsableEvent,Role.ResponsableHandResult)
  @ApiBearerAuth()
  @Get(":id")
  @ApiParam({ name: "id", type: String, description: "ID of the user" })
  async getById(@Param("id") id: any) {
    return this.userUseCases.getUserById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin,Role.ResponsableAcademie,Role.ResponsableComp,Role.ResponsableEvent,Role.ResponsableHandResult,Role.Entraineur)
  @ApiBearerAuth()
  @Get("email/:email")
  @ApiParam({ name: "email", type: String, description: "email of the user" })
  async getUserByEmail(@Param("email") email: string) {
    return this.userUseCases.findUserByEmail(email);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @ApiBearerAuth()
  @Roles(Role.Admin,Role.ResponsableAcademie)
  async getAll() {
    return this.userUseCases.getAllUsers();
  }

  // @Post()
  // @ApiBody({ type: CreateUserDto })
  // async createUser(@Body() userDto: CreateUserDto) {
  //   try {
  //     const newUser = await this.userUseCases.createUser({ ...userDto });
  //     return newUser;
  //   } catch (error) {
  //     return { error: "Unable to create user" };
  //   }
  // }

  @ApiConsumes("multipart/form-data")
  @Post()
  @UseInterceptors(
    FileInterceptor("avatar", {
      storage: storage,
      fileFilter: imageAndPdfFilter,
    })
  )
  @ApiBody({ type: CreateUserDto })
  async createAccount(
    @Body() userDto: CreateUserDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    try {
      const newArtist = await this.userUseCases.createAccount(
        {
          ...userDto,
        },
        file
      );
      return newArtist;
    } catch (error) {
      return { error: "Unable to create artist account" };
    }
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiConsumes("multipart/form-data")
  @Put(":id")
  @UseInterceptors(
    FileInterceptor("avatar", {
      storage: storage,
      fileFilter: imageAndPdfFilter,
    })
  )
  @ApiParam({ name: "id", type: String, description: "ID of the user" })
  @ApiBody({ type: UpdateUserDto })
  updateUser(
    @Param("id") userId: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userUseCases.updateUser(userId, updateUserDto, file);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin)
  // @ApiBearerAuth()
  // @ApiConsumes("multipart/form-data")
  // @Put("/artist/:id")
  // @ApiParam({ name: "id", type: String, description: "ID of the user" })
  // updateAccount(@Param("id") userId: string) {
  //   return this.userUseCases.appendAttestationToUser(userId);
  // }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Put(":userId/password")
  async updateUserPassword(
    @Param("userId") userId: string,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto
  ) {
    return this.userUseCases.updateUserPassword(userId, updateUserPasswordDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin,Role.ResponsableAcademie)
  @ApiBearerAuth()
  @Delete(":id")
  async deleteUser(@Param("id") id: string): Promise<boolean> {
    return this.userUseCases.deleteUser(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin,Role.ResponsableAcademie)
  @ApiBearerAuth()
  @Get("users/count") 
  async usersStats(): Promise<number> {
    return this.userUseCases.usersStats();
  }

  /*@UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin,Role.SuperAdmin,Role.ResponsableAcademie)
  @ApiBearerAuth()
  @Post("assign-role/:userId/:role")
  @ApiParam({ name: "userId", type: String, description: "ID de l'utilisateur" })
  @ApiParam({ name: "role", type: String, description: "Rôle à assigner" })
  async assignRole(
    @Param("userId") userId: string,
    @Param("role") role: Role
  ) {
    try {
      // Appeler la méthode pour attribuer le rôle dans user cases
      await this.userUseCases.assignRole(userId, role);
      return { success: true, message: `Rôle ${role} attribué avec succès à l'utilisateur ${userId}` };
    } catch (error) {
      return { success: false, error: "Impossible d'attribuer le rôle à l'utilisateur" };
    }
  }
  
  @Post("invite")
  async inviteUser(@Body() inviteUserDto: InviteUserDto): Promise<void> {
    await this.mailerService.sendEmail(inviteUserDto);
  }*/
}

