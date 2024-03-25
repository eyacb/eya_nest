import { Injectable } from '@nestjs/common';
import { CreateCompetitionDto, UpdateCompetitionDto } from 'src/core/dtos/competition.dto';
import { Competition, Participant } from 'src/core/entities/competition.entity';

@Injectable()
export class CompetitionFactoryService {
    createNewCompetition(createCompetitionDto: CreateCompetitionDto): Competition {
        const newCompetition = new Competition();
        newCompetition.name = createCompetitionDto.name;
        newCompetition.date = createCompetitionDto.date;
        newCompetition.organizer = createCompetitionDto.organizer;
        newCompetition.startTime = createCompetitionDto.startTime;
        newCompetition.endTime = createCompetitionDto.endTime;
        newCompetition.participationFee = createCompetitionDto.participationFee;
        newCompetition.feeType = createCompetitionDto.feeType;
        newCompetition.packaging = createCompetitionDto.packaging;
        newCompetition.registrationStatus = createCompetitionDto.registrationStatus;
        newCompetition.paymentStatus = createCompetitionDto.paymentStatus;
        newCompetition.signatureStatus = createCompetitionDto.signatureStatus;
        newCompetition.startListStatus = createCompetitionDto.startListStatus;
        newCompetition.resultStatus = createCompetitionDto.resultStatus;
        newCompetition.multiDayStatus = createCompetitionDto.multiDayStatus;
        newCompetition.multiDayFeeStatus = createCompetitionDto.multiDayFeeStatus;
        newCompetition.participants = createCompetitionDto.participants;
        return newCompetition;
    }

    updateCompetition(updateCompetitionDto: UpdateCompetitionDto): Competition {
        const updateCompetition = new Competition();
        updateCompetition.name = updateCompetitionDto.name;
        updateCompetition.date = updateCompetitionDto.date;
        updateCompetition.organizer = updateCompetitionDto.organizer;
        updateCompetition.startTime = updateCompetitionDto.startTime;
        updateCompetition.endTime = updateCompetitionDto.endTime;
        updateCompetition.participationFee = updateCompetitionDto.participationFee;
        updateCompetition.feeType = updateCompetitionDto.feeType;
        updateCompetition.packaging = updateCompetitionDto.packaging;
        updateCompetition.registrationStatus = updateCompetitionDto.registrationStatus;
        updateCompetition.paymentStatus = updateCompetitionDto.paymentStatus;
        updateCompetition.signatureStatus = updateCompetitionDto.signatureStatus;
        updateCompetition.startListStatus = updateCompetitionDto.startListStatus;
        updateCompetition.resultStatus = updateCompetitionDto.resultStatus;
        updateCompetition.multiDayStatus = updateCompetitionDto.multiDayStatus;
        updateCompetition.multiDayFeeStatus = updateCompetitionDto.multiDayFeeStatus;
        updateCompetition.participants = updateCompetitionDto.participants;
        return updateCompetition;
    }

    deleteCompetition(deleteCompetition: Competition) {
        
    }
}
