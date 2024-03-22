import { Injectable } from '@nestjs/common';
import { CreateGroupDto, DeleteGroupDto, UpdateGroupDto } from 'src/core/dtos/group.dto'; 
import { Group } from 'src/core/entities/group.entity'; 

@Injectable()
export class GroupFactoryService {
    createNewGroup(createGroupDto: CreateGroupDto): Group {
        const newGroup = new Group(); 
        newGroup.entraineur = createGroupDto.entraineur;
        newGroup.joueurs = Array.isArray(createGroupDto.joueurs) ? createGroupDto.joueurs : [createGroupDto.joueurs];
        newGroup.niveau = createGroupDto.niveau;
        newGroup.nom = createGroupDto.nom;
        newGroup.age = createGroupDto.age;

        return newGroup;
    }

    updateGroup(updateGroupDto: UpdateGroupDto): Group {
        const updatedGroup = new Group();
        updatedGroup.entraineur = updateGroupDto.entraineur;
        updatedGroup.joueurs = Array.isArray(updateGroupDto.joueurs) ? updateGroupDto.joueurs : [updateGroupDto.joueurs];
        updatedGroup.niveau = updateGroupDto.niveau;
        updatedGroup.nom = updateGroupDto.nom;
        updatedGroup.age = updateGroupDto.age;

        return updatedGroup;
    }

    deleteGroup(deleteGroup: DeleteGroupDto) {
    }
}
