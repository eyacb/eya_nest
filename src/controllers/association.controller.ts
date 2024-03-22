import { from } from "rxjs";
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

import { AssociationUseCases } from "src/use-cases/association/association.use-case";
import {
    ApiBody,
    ApiTags,
    ApiParam,
    ApiBearerAuth,
    ApiConsumes,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/guards/jwtauth.guard";
import { RolesGuard } from "src/core/roles/roles.guard";
import { Role } from "src/core/roles/role.enum";
import { Roles } from "src/core/roles/role.decorator";
import { UpdateAssociationPasswordDto } from "src/core/dtos/association.dto";

@ApiTags("api/association")
@Controller("api/association")
export class AssociationController {
    constructor(private associationUseCases: AssociationUseCases) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Get(":id")
    @ApiParam({ name: "id", type: String, description: "ID of the association" })
    async getById(@Param("id") id: any) {
        return this.associationUseCases.getAssociationById(id);
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Get("email/:email")
    @ApiParam({ name: "email", type: String, description: "email of the association" })
    async getAssociationByEmail(@Param("email") email: string) {
        return this.associationUseCases.findAssociationByEmail(email);
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    @ApiBearerAuth()
    @Roles(Role.SuperAdmin)
    async getAll() {
        return this.associationUseCases.getAllAssociation();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiBearerAuth()
    @Put(":associationId/password")
    async updateAssociationPassword(
        @Param("associationId") associationId: string,
        @Body() updateUserPasswordDto: UpdateAssociationPasswordDto
    ) {
        return this.associationUseCases.updateAssociationPassword(associationId, updateUserPasswordDto);
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Delete(":id")
    async deleteAssociation(@Param("id") id: string): Promise<boolean> {
        return this.associationUseCases.deleteAssociation(id);
    }
}