import { IBcryptService, IDataServices } from 'src/core';
import { CreateGroupDto, UpdateGroupDto } from 'src/core/dtos/group.dto'; 
import { GroupFactoryService } from './group-factory.service'; 
import { Body, Injectable, NotFoundException, Param, UnauthorizedException } from '@nestjs/common';
import { Group } from 'src/core/entities/group.entity';

@Injectable()
export class GroupUseCases {
    constructor(
        private dataServices: IDataServices,
        private groupFactoryService: GroupFactoryService,
        private bcryptService: IBcryptService
    ) { }

    async getAllGroups(): Promise<Group[]> {
        return await this.dataServices.groups.getAll();
    }

    async getGroupById(@Param('id') id: string): Promise<Group> {
        const group = await this.dataServices.groups.get(id);
        if (!group) {
            throw new NotFoundException(`Group with ID ${id} not found.`);
        }
        return group;
    }

    async createGroup(createGroupDto: CreateGroupDto): Promise<Group> {
        try {
            const groupExist = await this.dataServices.groups.findAllByAttribute(
                "nom",
                createGroupDto.nom
            );
            if (groupExist) {
                throw new UnauthorizedException("Group already exists.");
            }
            createGroupDto.nom = await this.bcryptService.hashPassword(
                createGroupDto.nom
            );
            const group = this.groupFactoryService.createNewGroup(createGroupDto);
            const createdGroup = await this.dataServices.groups.create(group);
            return createdGroup;
        } catch (error) {
            throw error;
        }
    }

    async findGroupByNom(nom: string): Promise<Group> {
        const group = await this.dataServices.groups.findByAttribute("nom", nom);
        if (!group) {
            throw new NotFoundException("Group not found.");
        }
        return group;
    }

    async updateGroup(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto): Promise<Group> {
        const group = await this.dataServices.groups.get(id);
        if (!group) {
            throw new NotFoundException(`Group with ID ${id} not found.`);
        }
        const updatedGroup = { ...group, ...updateGroupDto } as Group; 
        return await this.dataServices.groups.update(id, updatedGroup);
    }

    async deleteGroup(@Param('id') id: string): Promise<boolean> {
        const group = await this.dataServices.groups.delete(id);
        return group ? true : false;
    }
}
