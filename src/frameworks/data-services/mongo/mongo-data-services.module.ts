import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IDataServices, User } from "../../../core";
import { DATA_BASE_CONFIGURATION } from "../../../configuration";
import {

  Notification,
  NotificationSchema,

  UserSchema,
} from "./model";
import { MongoDataServices } from "./mongo-data-services.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Notification.name, schema: NotificationSchema },
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
