import { Controller, Get, Post, Put, Delete, Body, Param, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Competition, IDataServices } from 'src/core';
import { CreateCompetitionDto, UpdateCompetitionDto } from 'src/core/dtos/competition.dto'; // Assurez-vous d'importer UpdateCompetitionDto
import { CompetitionFactoryService } from './competition-factory.service';
import { AssignMarquerDto } from 'src/core/dtos/assign-marquer.dto';
import { InscrireParticipantDto } from 'src/core/dtos/inscrire-participant.dto';
import { CompetitionResultDto } from 'src/core/dtos/competition-result.dto';

@Injectable()
export class CompetitionUseCases {
  constructor(  
    private dataServices: IDataServices,
    private competitionsFactoryService: CompetitionFactoryService,
    private participants: string[] = [],

  ) {}

  async getAllCompetitions(): Promise<Competition[]> {
    return await this.dataServices.competitions.getAll();
  }

  async getCompetitionById(@Param('id') id: string): Promise<Competition> {
    const competition = await this.dataServices.competitions.get(id);
    if (!competition) {
      throw new NotFoundException(`Competition with ID ${id} not found.`);
    }
    return competition;
  }

  async createCompetition(@Body() createCompetitionDto: CreateCompetitionDto): Promise<Competition> {
    const { name } = createCompetitionDto;
    const competitionExist = await this.dataServices.competitions.findByAttribute('nom', name);
    if (competitionExist) {
      throw new UnauthorizedException(`Competition with name ${name} already exists.`);
    }
    const newCompetition = this.competitionsFactoryService.createNewCompetition(createCompetitionDto);
    return await this.dataServices.competitions.create(newCompetition);
  }

  async updateCompetition(@Param('id') id: string, @Body() updateCompetitionDto: UpdateCompetitionDto): Promise<Competition> {
    const competition = await this.dataServices.competitions.get(id);
    if (!competition) {
      throw new NotFoundException(`Competition with ID ${id} not found.`);
    }
    const updatedCompetition = { ...competition, ...updateCompetitionDto };
    return await this.dataServices.competitions.update(id, updatedCompetition);
  }

  async deleteCompetition(@Param('id') id: string): Promise<void> {
    const competition = await this.dataServices.competitions.get(id);
    if (!competition) {
      throw new NotFoundException(`Competition with ID ${id} not found.`);
    }
    await this.dataServices.competitions.delete(id);
  }


  inscrireParticipant(inscrireParticipantDto: InscrireParticipantDto): void {
    const { nomCompetition, nomParticipant } = inscrireParticipantDto;
    if (!this.participants.includes(nomParticipant)) {
      this.participants.push(nomParticipant);
      console.log(`${nomParticipant} inscrit à la compétition ${nomCompetition}`);
    } else {
      console.log(`${nomParticipant} est déjà inscrit à la compétition ${nomCompetition}`);
    }
  }

  assignMarquer(assignMarquerDto: AssignMarquerDto): void {
    const { nomParticipant, nomMarqueur } = assignMarquerDto;
    console.log(`${nomMarqueur} est assigné comme marqueur pour ${nomParticipant}`);
  }

  competitionResult(competitionResultDto: CompetitionResultDto): void {
    const { nomCompetition, resultats } = competitionResultDto;
    console.log(`Résultats de la compétition ${nomCompetition}:`);
    for (const participant in resultats) {
      console.log(`${participant}: ${resultats[participant]} points`);
    }
  }
}

