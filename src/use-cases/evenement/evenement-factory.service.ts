import { Injectable } from '@nestjs/common';
import { CreateEvenementDto, DeleteEvenementDto, UpdateEvenementDto } from 'src/core/dtos/evenement.dto';
import { Evenement} from 'src/core/entities/evenement.entity'; 

@Injectable()
export class EvenementFactoryService {
    createNewEvenement(createEvenementDto: CreateEvenementDto): Evenement {
        const newEvenement = new Evenement(); 
        newEvenement.titre = createEvenementDto.titre;
        newEvenement.description = createEvenementDto.description;
        newEvenement.dateDebut = createEvenementDto.dateDebut;
        newEvenement.dateFin = createEvenementDto.dateFin;
        return newEvenement;
    }

    updateEvenement(updateEvenementDto: UpdateEvenementDto): Evenement{
        const updateEvenement = new Evenement();
        updateEvenement.titre = updateEvenementDto.titre;
        updateEvenement.description = updateEvenementDto.description;
        updateEvenement.dateDebut = updateEvenementDto.dateDebut;
        updateEvenement.dateFin = updateEvenementDto.dateFin;
        return updateEvenement;
    }

    deleteEvenement(deleteEvenement: DeleteEvenementDto) {
    }
}
