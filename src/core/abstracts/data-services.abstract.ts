import { User, Notification, Association, Competition, Evenement} from "../entities";
import { Sceance } from "../entities/sceance.entity";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
  abstract notifications: IGenericRepository<Notification>;
  abstract associations: IGenericRepository<Association>;
  abstract competitions: IGenericRepository<Competition>;
  abstract evenements: IGenericRepository<Evenement>;
  abstract sceances: IGenericRepository<Sceance>;
}
