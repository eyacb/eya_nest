import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  Association,
  Competition,
  Evenement,
  IDataServices,
  IGenericRepository,
  Sceance,
  Group,
} from "../../../core";
import { MongoGenericRepository } from "./mongo-generic-repository";
import {
  UserDocument,
  User,
  Notification,
  // since model and entity have same name i use alias to avoid conflicts
  Group as Groups,
  Association as Associations,
  Competition as Competitions,
  Event as Evenements,
  Sceance as Sceances,
  //
  NotificationDocument,
  AssociationDocument,
  CompetitionDocument,
  EventDocument,
  SceanceDocument,
  GroupDocument,
} from "./model";

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
  groups: IGenericRepository<Group>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Notification.name)
    private NotificationRepository: Model<NotificationDocument>,
    @InjectModel(Associations.name)
    private AssociationsRepository: Model<AssociationDocument>,
    @InjectModel(Competitions.name)
    private CompetitionsRepository: Model<CompetitionDocument>,
    @InjectModel(Evenements.name)
    private EvenementsRepository: Model<EventDocument>,
    @InjectModel(Sceances.name)
    private SeancesRepository: Model<SceanceDocument>,
    @InjectModel(Groups.name)
    private GroupsRepository: Model<GroupDocument>
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.notifications = new MongoGenericRepository<Notification>(
      this.NotificationRepository,
      ["transfertRequestId", "recipient"]
    );
    this.associations = new MongoGenericRepository<Associations>(
      this.AssociationsRepository
    );
    this.competitions = new MongoGenericRepository<Competitions>(
      this.CompetitionsRepository
    );
    this.evenements = new MongoGenericRepository<Evenements>(
      this.EvenementsRepository
    );
    this.sceances = new MongoGenericRepository<Sceances>(
      this.SeancesRepository
    );
    this.groups = new MongoGenericRepository<Groups>(this.GroupsRepository);
  }
}
