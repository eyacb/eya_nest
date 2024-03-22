import { Types } from 'mongoose';

export class Message {
  _id: Types.ObjectId;
  chat_id: Types.ObjectId;
  sender_id: Types.ObjectId;
  message: string;

  constructor(props: Partial<Message>) {
    this._id = props._id || null;
    this.chat_id = props.chat_id || null;
    this.sender_id = props.sender_id || null;
    this.message = props.message || null;
  }
}
