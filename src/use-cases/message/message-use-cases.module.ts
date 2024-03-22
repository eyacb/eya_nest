import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesUseCases } from './message.use-case';
import { MessageController } from 'src/controllers';
import { MessageFactoryService } from './message-factory.service';
import { Message } from 'src/core/entities';
import { MessageSchema } from 'src/frameworks/data-services/mongo/model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [MessageController],
  providers: [MessageFactoryService, MessagesUseCases],
  exports: [MessagesUseCases],
})
export class MessageModule {}
