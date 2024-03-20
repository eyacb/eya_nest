import { Injectable } from '@nestjs/common';
import { CreateCompetitionDto, UpdateCompetitionDto } from 'src/core/dtos/competition.dto';
import { Competition } from 'src/core/entities/competition.entity';

@Injectable()
export class CompetitionFactoryService {
    createNewCompetition(createCompetitionDto: CreateCompetitionDto): Competition {
        const newCompetition = new Competition();
        newCompetition.nom = createCompetitionDto.nom;
        newCompetition.dateDebut = createCompetitionDto.dateDebut;
        newCompetition.dateFin = createCompetitionDto.dateFin;
        newCompetition.score = createCompetitionDto.score;
        newCompetition.joueurs = createCompetitionDto.joueurs;
        return newCompetition;
    }

    updateCompetition( updateCompetitionDto: UpdateCompetitionDto){
        const updateCompetition= new Competition();
        updateCompetition.nom = updateCompetitionDto.nom ;
        updateCompetition.dateDebut = updateCompetitionDto.dateDebut;
        updateCompetition.dateFin = updateCompetitionDto.dateFin ;
        updateCompetition.score = updateCompetitionDto.score ;
        updateCompetition.joueurs = updateCompetitionDto.joueurs ;
        return updateCompetition;
    }

    deleteCompetition(deleteCompetition: Competition) {
      

    }
}
