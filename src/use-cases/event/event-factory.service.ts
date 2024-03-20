import { Injectable } from '@nestjs/common';
import { CreateEventDto, DeleteEventDto, UpdateEventDto } from 'src/core/dtos/event.dto';
import { Event} from 'src/core/entities/event.entity'; // Renommez votre classe Event en EventEntity

@Injectable()
export class EventFactoryService {
    createNewEvent(createEventDto: CreateEventDto): Event {
        const newEvent = new Event(); 
        newEvent.titre = createEventDto.titre;
        newEvent.description = createEventDto.description;
        newEvent.dateDebut = createEventDto.dateDebut;
        newEvent.dateFin = createEventDto.dateFin;
        return newEvent;
    }

    updateEvent(updateEventDto: UpdateEventDto): Event{
        const updateEvent = new Event();
        updateEvent.titre = updateEventDto.titre;
        updateEvent.description = updateEventDto.description;
        updateEvent.dateDebut = updateEventDto.dateDebut;
        updateEvent.dateFin = updateEventDto.dateFin;
        return updateEvent;
    }

    deleteEvent(deleteEvent: DeleteEventDto) {
    }
}
