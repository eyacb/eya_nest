import {
  User,
  Notification,
  Association,
} from "../entities";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
  abstract notifications: IGenericRepository<Notification>;
  abstract associations:IGenericRepository<Association>;
}
