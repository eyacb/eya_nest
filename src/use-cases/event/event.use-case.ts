import { Controller, Get, Post, Put, Delete, Body, Param, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Event, IDataServices } from 'src/core'; 
import { CreateEventDto, UpdateEventDto } from 'src/core/dtos/event.dto';
import { EventFactoryService } from './event-factory.service';

@Injectable()
export class EventUseCases {
  constructor(  
    private dataServices: IDataServices,
    private eventsFactoryService: EventFactoryService,
  ) {}

  async getAllEvents(): Promise<Event[]> {
    return await this.dataServices.events.getAll();
  }

  async getEventById(@Param('id') id: string): Promise<Event> {
    const event = await this.dataServices.events.get(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found.`);
    }
    return event;
  }

  async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
    const { titre } = createEventDto;
    const eventExist = await this.dataServices.events.findByAttribute('titre', titre);
    if (eventExist) {
      throw new UnauthorizedException(`Event with name ${titre} already exists.`);
    }
    const newEvent = this.eventsFactoryService.createNewEvent(createEventDto);
    return await this.dataServices.events.create(newEvent);
  }

  async updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto): Promise<Event> {
    const event = await this.dataServices.events.get(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found.`);
    }
    const updatedEvent = { ...event, ...updateEventDto };
    return await this.dataServices.events.update(id, updatedEvent);
  }

  async deleteEvent(@Param('id') id: string): Promise<void> {
    const event = await this.dataServices.events.get(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found.`);
    }
    await this.dataServices.events.delete(id);
  }
}
