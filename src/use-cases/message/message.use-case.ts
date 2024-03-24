import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from 'src/core/entities/message.entity';


export class MessagesUseCases {
  constructor(
    @InjectModel('Message')
    private messageModel: Model<Message>,
  ) {}

  async createMessage(message): Promise<any> {
    const createOne = await this.messageModel.create(message);
    return createOne;
  }

  async findAllMessages(id): Promise<any> {
    const findAll = await this.messageModel.find({ chat_id: { $all: [id] } });
    return findAll;
  }
}
