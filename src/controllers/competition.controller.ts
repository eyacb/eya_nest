import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Competition, IDataServices } from 'src/core';
import { CreateCompetitionDto, UpdateCompetitionDto } from 'src/core/dtos/competition.dto'; 

@Controller('competition')
export class CompetitionController {
  constructor(  
    private dataServices: IDataServices
  ) {}

  @Post()
  create(@Body() createCompetitionDto: CreateCompetitionDto) {
    return this.dataServices.competitions.create(createCompetitionDto);
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
}
