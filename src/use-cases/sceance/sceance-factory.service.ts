import { Injectable } from '@nestjs/common';
import { CreateSceanceDto, UpdateSceanceDto } from 'src/core/dtos/sceance.dto';
import { Sceance } from 'src/core/entities/sceance.entity';

@Injectable()
export class SceanceFactoryService {
    createNewSceance(createSceanceDto: CreateSceanceDto): Sceance {
        const newSceance = new Sceance();
        newSceance.titre = createSceanceDto.titre;
        newSceance.entraineur = createSceanceDto.entraineur;
        newSceance.description = createSceanceDto.description;
        newSceance.DateEntrainement = createSceanceDto.DateEntrainement;
        newSceance.heure = createSceanceDto.heure;
        newSceance.presence = createSceanceDto.presence;
        newSceance.type = createSceanceDto.type;

        return newSceance;
    }

    updateSceance( updateSceanceDto: UpdateSceanceDto){
        const updateSceance= new Sceance();
        updateSceance.titre= updateSceanceDto.titre;
        updateSceance.entraineur = updateSceanceDto.entraineur;
        updateSceance.description  = updateSceanceDto.description  ;
        updateSceance.DateEntrainement = updateSceanceDto.DateEntrainement ;
        updateSceance.heure = updateSceanceDto.heure ;
        updateSceance.presence = updateSceanceDto.presence ;
        updateSceance.type= updateSceanceDto.type ;
        return updateSceance;
    }

    deleteSceance(deleteSceance: Sceance) {
      

    }
}
