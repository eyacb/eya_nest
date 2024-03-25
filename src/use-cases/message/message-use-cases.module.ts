import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MessagesUseCases } from "./message.use-case";
import { MessageController } from "src/controllers";
import { MessageFactoryService } from "./message-factory.service";
import { MessageSchema } from "src/frameworks/data-services/mongo/model";
import { Message } from "src/core/entities/message.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [MessageFactoryService, MessagesUseCases],
  exports: [MessagesUseCases],
})
export class MessageUseCaseModule {}
