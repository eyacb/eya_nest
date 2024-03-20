import { User, Notification, Association, Competition ,Event} from "../entities";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
  abstract notifications: IGenericRepository<Notification>;
  abstract associations: IGenericRepository<Association>;
  abstract competitions: IGenericRepository<Competition>;
  abstract events: IGenericRepository<Event>;
}
