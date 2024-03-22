import { Injectable } from '@nestjs/common';
import { MessagesUseCases } from './message.use-case';
import { CreateMessageDto } from 'src/core/dtos';

@Injectable()
export class MessageFactoryService {
  constructor(private readonly messagesRepository: MessagesUseCases) {}

  async createMessage(createMessageDto: CreateMessageDto) {
    return await this.messagesRepository.createMessage(createMessageDto);
  }

  async findAllMessages(id: string) {
    return await this.messagesRepository.findAllMessages(id);
  }
}
