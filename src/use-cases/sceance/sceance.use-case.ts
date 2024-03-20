import { Controller, Get, Post, Put, Delete, Body, Param, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { IDataServices } from 'src/core';
import { CreateSceanceDto, UpdateSceanceDto } from 'src/core/dtos/sceance.dto'; // Assurez-vous d'importer UpdateSceanceDto
import { SceanceFactoryService } from './sceance-factory.service';
import { Sceance } from 'src/core/entities/sceance.entity';

@Injectable()
export class SceanceUseCases {
  constructor(  
    private dataServices: IDataServices,
    private sceancesFactoryService: SceanceFactoryService,
  ) {}

  async getAllSceances(): Promise<Sceance[]> {
    return await this.dataServices.sceances.getAll();
  }

  async getSceanceById(@Param('id') id: string): Promise<Sceance> {
    const sceance = await this.dataServices.sceances.get(id);
    if (!sceance) {
      throw new NotFoundException(`Sceance with ID ${id} not found.`);
    }
    return sceance;
  }

  async createSceance(@Body() createSceanceDto: CreateSceanceDto): Promise<Sceance> {
    const { titre } = createSceanceDto;
    const sceanceExist = await this.dataServices.sceances.findByAttribute('titre', titre);
    if (sceanceExist) {
      throw new UnauthorizedException(`Sceance with titre ${titre} already exists.`);
    }
    const newSceance = this.sceancesFactoryService.createNewSceance(createSceanceDto);
    return await this.dataServices.sceances.create(newSceance);
  }

 
  async updateSceance(@Param('id') id: string, @Body() updateSceanceDto: UpdateSceanceDto): Promise<Sceance> {
    const sceance = await this.dataServices.sceances.get(id);
    if (!sceance) {
      throw new NotFoundException(`Sceance with ID ${id} not found.`);
    }
    const updatedSceance = { ...sceance, ...updateSceanceDto };
    return await this.dataServices.sceances.update(id, updatedSceance);
  }

  
  async deleteSceance(@Param('id') id: string): Promise<void> {
    const sceance = await this.dataServices.sceances.get(id);
    if (!sceance) {
      throw new NotFoundException(`Sceance with ID ${id} not found.`);
    }
    await this.dataServices.sceances.delete(id);
  }
}
