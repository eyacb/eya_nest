import { Injectable } from '@nestjs/common';
import { CreateChatDto } from 'src/core/dtos/chat.dto';
import { ChatsUseCases } from './chat.use-case';

@Injectable()
export class ChatFactoryService {
  constructor(private readonly chatsRepository: ChatsUseCases) {}

  async createChat(createChatDto: CreateChatDto) {
    return await this.chatsRepository.createChat(createChatDto);
  }

  async findAllChats(id: string) {
    return await this.chatsRepository.findAllChats(id);
  }
}
