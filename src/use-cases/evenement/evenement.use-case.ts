import { Evenement, IBcryptService, IDataServices } from 'src/core';
import { CreateEvenementDto, UpdateEvenementDto } from 'src/core/dtos/evenement.dto';
import { EvenementFactoryService } from './evenement-factory.service';
import { Body, Injectable, NotFoundException, Param, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class EvenementUseCases {
    constructor(
        private dataServices: IDataServices,
        private evenementFactoryService: EvenementFactoryService,
        private bcryptService: IBcryptService

    ) { }

    async getAllEvenement(): Promise<Evenement[]> {
        return await this.dataServices.evenements.getAll();
    }

    async getEvenementById(@Param('id') id: string): Promise<Evenement> {
        const evenement = await this.dataServices.evenements.get(id);
        if (!evenement) {
            throw new NotFoundException(`Evenement with ID ${id} not found.`);
        }
        return evenement;
    }

    async createEvenement(createEvenementDto: CreateEvenementDto): Promise<Evenement> {

        try {
            const evenementExist = await this.dataServices.evenements.findAllByAttribute(
                "titre",
                createEvenementDto.titre
            );
            if (evenementExist) {
                throw new UnauthorizedException("Evenement already exist.");
            }
            createEvenementDto.titre = await this.bcryptService.hashPassword(
                createEvenementDto.titre
            );
            const evenement = this.evenementFactoryService.createNewEvenement(createEvenementDto);
            const createEvenement = await this.dataServices.evenements.create(evenement);
            return createEvenement;
        } catch (error) {
            throw error;
        }
    }

    async findEvenementByTitre(titre: string): Promise<Evenement> {
        const evenement = await this.dataServices.evenements.findByAttribute("titre", titre);

        if (!evenement) throw new NotFoundException("evenement not found.");
        return evenement;
    }


    async updateEvenement(@Param('id') id: string, @Body() updateEvenementDto: UpdateEvenementDto): Promise<Evenement> {
        const evenement = await this.dataServices.evenements.get(id);
        if (!evenement) {
            throw new NotFoundException(`Evenement with ID ${id} not found.`);
        }
        const updatedEvenement = { ...evenement, ...updateEvenementDto };
        return await this.dataServices.evenements.update(id, updatedEvenement);
    }

    async deleteEvenement(id: string): Promise<boolean> {
        const evenement = await this.dataServices.evenements.delete(id);
        return evenement ? true : false;
    }
}
