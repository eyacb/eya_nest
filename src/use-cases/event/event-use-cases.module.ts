import { Module } from '@nestjs/common';
import { SocketModule } from "src/frameworks/socket/socket-services.module";
import { BcryptServicesModule } from "src/services/bcrypt-services/bcrypt-services.module";
import { DataServicesModule } from "../../services/data-services/data-services.module";
import { EventUseCases } from './event.use-case';
import { EventFactoryService } from './event-factory.service';


@Module({
  imports: [DataServicesModule,SocketModule,BcryptServicesModule,],
  providers:  [
    EventFactoryService,
    EventUseCases,
],
  exports: [
   EventFactoryService,
    EventUseCases,
],
})
export class EventUseCasesModule {}
