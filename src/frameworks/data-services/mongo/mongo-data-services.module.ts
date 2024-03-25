import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IDataServices } from "../../../core";
import { DATA_BASE_CONFIGURATION } from "../../../configuration";
import {
  Notification,
  NotificationSchema,
  UserSchema,
  AssociationSchema,
  User,
  Association,
  Competition,
  CompetitionSchema,
  Event,
  EventSchema,
  Group,
  GroupSchema,
  Sceance,
  SceanceSchema,
} from "./model";
import { MongoDataServices } from "./mongo-data-services.service";

@Module({
  //should add features
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Notification.name, schema: NotificationSchema },
      { name: Association.name, schema: AssociationSchema },
      { name: Competition.name, schema: CompetitionSchema },
      { name: Event.name, schema: EventSchema },
      { name: Group.name, schema: GroupSchema },
      { name: Sceance.name, schema: SceanceSchema },
    ]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString, {
      dbName: "golfi",
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
