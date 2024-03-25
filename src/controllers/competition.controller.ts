import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Competition, IDataServices } from 'src/core';
import { AssignMarquerDto } from 'src/core/dtos/assign-marquer.dto';
import { CompetitionResultDto } from 'src/core/dtos/competition-result.dto';
import { CreateCompetitionDto, UpdateCompetitionDto } from 'src/core/dtos/competition.dto'; 
import { InscrireParticipantDto } from 'src/core/dtos/inscrire-participant.dto';
import { CompetitionFactoryService } from 'src/use-cases/competition/competition-factory.service';
import { CompetitionUseCases } from 'src/use-cases/competition/competition.use-case';
@ApiTags("api/competition")
@Controller('competition')
export class CompetitionController {
  constructor(  
    private dataServices: IDataServices,
    private useCaseCompetition: CompetitionUseCases,
    private competitionFactoryService: CompetitionFactoryService
  ) {}

  @Post()
  @Post()
  async create(@Body() createCompetitionDto: CreateCompetitionDto) {
    const newCompetition: Competition = this.competitionFactoryService.createNewCompetition(createCompetitionDto);
    return await this.dataServices.competitions.create(newCompetition);
  }


  @Get()
  getAll() {
    return this.dataServices.competitions.getAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCompetitionDto: Competition) { 
    return this.dataServices.competitions.update(id, updateCompetitionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) { 
    return this.dataServices.competitions.delete(id); 
  }

  @Post('inscrire-participant')
  inscrireParticipant(@Body() inscrireParticipantDto: InscrireParticipantDto): void {
    this.useCaseCompetition.inscrireParticipant(inscrireParticipantDto);
  }

  @Post('assign-marquer')
  assignMarquer(@Body() assignMarquerDto: AssignMarquerDto): void {
    this.useCaseCompetition.assignMarquer(assignMarquerDto);
  }

  @Post('competition-result')
  competitionResult(@Body() competitionResultDto: CompetitionResultDto): void {
    this.useCaseCompetition.competitionResult(competitionResultDto);
  }
}
