import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Association, Competition, Evenement, IDataServices, IGenericRepository, Sceance } from "../../../core"; 
import { MongoGenericRepository } from "./mongo-generic-repository";
import {
  UserDocument,
  User,
  Notification,
  NotificationDocument,

} from "./model";
import { Group } from "src/core/entities/group.entity";


@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: MongoGenericRepository<User>;
  notifications: MongoGenericRepository<Notification>;
  associations: IGenericRepository<Association>;
  competitions: IGenericRepository<Competition>;
  evenements: IGenericRepository<Evenement>; 
  sceances: IGenericRepository<Sceance>; 
  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Notification.name)
    private NotificationRepository: Model<NotificationDocument>,
  ) {}
  groups: IGenericRepository<Group>;

 

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.notifications = new MongoGenericRepository<Notification>(
      this.NotificationRepository,
      ["transfertRequestId", "recipient"]
    );
  }
}
