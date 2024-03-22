import {
    Controller,
    Get,
    Param,
    Delete,
    UseGuards,
} from "@nestjs/common";

import {
    ApiTags,
    ApiParam,
    ApiBearerAuth,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/guards/jwtauth.guard";
import { RolesGuard } from "src/core/roles/roles.guard";
import { Role } from "src/core/roles/role.enum";
import { Roles } from "src/core/roles/role.decorator";
import { GroupUseCases } from "src/use-cases/group/group.use-case"; 

@ApiTags("api/group")
@Controller("api/group") 
export class GroupController { 
    constructor(private groupUseCases: GroupUseCases) { } 

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Get(":id")
    @ApiParam({ name: "id", type: String, description: "ID of the group" })
    async getById(@Param("id") id: any) {
        return this.groupUseCases.getGroupById(id); 
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Get("nom/:nom") 
    @ApiParam({ name: "nom", type: String, description: "Nom of the group" }) 
    async getGroupByNom(@Param("nom") nom: string) { 
        return this.groupUseCases.findGroupByNom(nom); 
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    @ApiBearerAuth()
    @Roles(Role.SuperAdmin)
    async getAll() {
        return this.groupUseCases.getAllGroups(); 
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Delete(":id")
    async deleteGroup(@Param("id") id: string): Promise<boolean> {
        return this.groupUseCases.deleteGroup(id); 
    }
}
