import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { AbstractWebSocketGateway, Association, IBcryptService, IDataServices } from "src/core";
import { CreateAssociationDto, UpdateAssociationDto, UpdateAssociationPasswordDto } from "src/core/dtos";
import { AssociationFactoryservice } from "./association-factory.service";
import { Types } from "mongoose";
@Injectable()
export class AssociationUseCases {
    constructor(
        private dataServices: IDataServices,
        private associtionFactoryService: AssociationFactoryservice,
        private associationSocket: AbstractWebSocketGateway,
        private bcryptService: IBcryptService

    ) { }

    getAllAssociation(): Promise<Association[]> {
        return this.dataServices.associations.getAll();
    }

    async getAssociationById(id: any): Promise<Association> {
        const association=await  this.dataServices.associations.get(id);
        if (!association) {
            throw new NotFoundException(`association with ID ${id} not found.`);
          }
          return association;
    }

    async createAssociation(createAssociationDto: CreateAssociationDto): Promise<Association> {

        try {
            const associationExist = await this.dataServices.associations.findAllByAttribute(
                "email",
                createAssociationDto.email
            );
            if (associationExist) {
                throw new UnauthorizedException("Association already exist.");
            }
            createAssociationDto.password = await this.bcryptService.hashPassword(
                createAssociationDto.password
            );
            const association = this.associtionFactoryService.createNewAssociation(createAssociationDto);
            const createAssociation = await this.dataServices.associations.create(association);
            return createAssociation;
        } catch (error) {
            throw error;
        }
    }
      async updateAssociation(
        associationId: string,
        updateAssociationDto: UpdateAssociationDto,
      ): Promise<Association> {
        // Fetch the existing association from the database
        const existingAssociation = await this.dataServices.associations.get(associationId);
    
        // If the association doesn't exist, throw a NotFoundException
        if (!existingAssociation) {
          throw new NotFoundException('Association not found');
        }
    
        // Update all properties of the existing association with the values from updateAssociationDto
        Object.assign(existingAssociation, updateAssociationDto);
    
        // Update the existing association in the database
        const updatedAssociation = await this.dataServices.associations.update(associationId, existingAssociation);
    
        return updatedAssociation;
      }


    async updateAssociationPassword(
        associationId: string,
        updateAssociationPasswordDto: UpdateAssociationPasswordDto
    ): Promise<Boolean> {
        const association = await this.getAssociationById(associationId);
        if (!association) {
            throw new UnauthorizedException("Association Not fount.");
        }
        const isValid = await this.bcryptService.comparePassword(
            updateAssociationPasswordDto.currentPassword,
            association.password
        );
        if (!isValid) {
            throw new UnauthorizedException("Invalid Password!.");
        }
    
     association.password = await this.bcryptService.hashPassword(
        updateAssociationPasswordDto.newPassword
    );
    await this.dataServices.associations.update(associationId, association);
    return true;
    }

    async findAssociationByEmail(email: string): Promise<Association> {
        const association = await this.dataServices.associations.findByAttribute("email", email);
    
        if (!association) throw new NotFoundException("Association not found.");
        return association;
      }
      async deleteAssociation(id: string): Promise<boolean> {
        const association = await this.dataServices.associations.delete(id);
        return association ? true : false;
      }

      
}







