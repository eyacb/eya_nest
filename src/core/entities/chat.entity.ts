import { Types } from 'mongoose';

export class Chat {
  _id: Types.ObjectId;
  members: Array<Types.ObjectId>;

  constructor(props: Partial<Chat>) {
    this._id = props._id || null;
    this.members = props.members || null;
  }
}
