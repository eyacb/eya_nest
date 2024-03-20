import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Event, IDataServices } from 'src/core';
import { CreateEventDto } from 'src/core/dtos/event.dto';

@Controller('event')
export class EventController {
  constructor(  
    private dataServices: IDataServices
  ) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.dataServices.events.create(createEventDto);
  }

  @Get()
  getAll() {
    return this.dataServices.events.getAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: Event) {
    return this.dataServices.events.update(id, updateEventDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) { 
    return this.dataServices.events.delete(id); 
  }
}
