import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatSchema, Chat } from 'src/frameworks/data-services/mongo/model/chat.model';
import { ChatsUseCases } from './chat.use-case';
import { ChatFactoryService } from './chat-factory.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  ],
  providers: [ChatFactoryService, ChatsUseCases],
  exports: [ChatFactoryService],
})
export class ChatUseCaseModule {}
