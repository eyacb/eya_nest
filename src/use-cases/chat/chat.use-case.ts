import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from 'src/core/entities/chat.entity';

export class ChatsUseCases {
  constructor(
    @InjectModel('Chat')
    private chatModel: Model<Chat>,
  ) {}

  async createChat(chat): Promise<any> {
    const createOne = await this.chatModel.create(chat);
    return createOne;
  }

  async findAllChats(id): Promise<any> {
    const findAll = await this.chatModel.find({ members: { $all: [id] } });
    return findAll;
  }
}
