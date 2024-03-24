import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IDataServices } from 'src/core';
import { CreateSceanceDto, UpdateSceanceDto } from 'src/core/dtos/sceance.dto'; 
import { Sceance } from 'src/core/entities/sceance.entity';
@ApiTags("api/sceance")
@Controller('sceance')
export class SceanceController {
  constructor(  
    private dataServices: IDataServices
  ) {}

  @Post()
  create(@Body() createSceanceDto: CreateSceanceDto) {
    return this.dataServices.sceances.create(createSceanceDto);
  }

  @Get()
  getAll() {
    return this.dataServices.sceances.getAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSceanceDto: Sceance) { 
    return this.dataServices.sceances.update(id, updateSceanceDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) { 
    return this.dataServices.sceances.delete(id); 
  }
}
