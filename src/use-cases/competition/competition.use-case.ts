import { Controller, Get, Post, Put, Delete, Body, Param, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Competition, IDataServices } from 'src/core';
import { CreateCompetitionDto, UpdateCompetitionDto } from 'src/core/dtos/competition.dto'; // Assurez-vous d'importer UpdateCompetitionDto
import { CompetitionFactoryService } from './competition-factory.service';

@Injectable()
export class CompetitionUseCases {
  constructor(  
    private dataServices: IDataServices,
    private competitionsFactoryService: CompetitionFactoryService,
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
    const { nom } = createCompetitionDto;
    const competitionExist = await this.dataServices.competitions.findByAttribute('nom', nom);
    if (competitionExist) {
      throw new UnauthorizedException(`Competition with name ${nom} already exists.`);
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
}
