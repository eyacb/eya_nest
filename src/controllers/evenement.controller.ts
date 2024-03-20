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
import { EvenementUseCases } from "src/use-cases/evenement/evenement.use-case";


@ApiTags("api/evenement")
@Controller("api/evenement")
export class EvenementController {
    constructor(private evenementUseCases: EvenementUseCases) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Get(":id")
    @ApiParam({ name: "id", type: String, description: "ID of the evenement" })
    async getById(@Param("id") id: any) {
        return this.evenementUseCases.getEvenementById(id);
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Get("titre/:titre")
    @ApiParam({ name: "titre", type: String, description: "titre of the evenement" })
    async getEvenementByTitre(@Param("titre") titre: string) {
        return this.evenementUseCases.findEvenementByTitre(titre);
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    @ApiBearerAuth()
    @Roles(Role.SuperAdmin)
    async getAll() {
        return this.evenementUseCases.getAllEvenement();
    }




    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.SuperAdmin)
    @ApiBearerAuth()
    @Delete(":id")
    async deleteEvenement(@Param("id") id: string): Promise<boolean> {
        return this.evenementUseCases.deleteEvenement(id);
    }
}