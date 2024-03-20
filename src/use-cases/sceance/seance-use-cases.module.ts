import { Module } from '@nestjs/common';
import { SocketModule } from "src/frameworks/socket/socket-services.module";
import { BcryptServicesModule } from "src/services/bcrypt-services/bcrypt-services.module";
import { DataServicesModule } from "../../services/data-services/data-services.module";
import { SceanceFactoryService } from './sceance-factory.service';
import { SceanceUseCases } from './sceance.use-case';


@Module({
  imports: [DataServicesModule,SocketModule,BcryptServicesModule,],
  providers:  [
    SceanceFactoryService,
    SceanceUseCases,
],
  exports: [
    SceanceFactoryService,
    SceanceUseCases,
],
})
export class SceanceUseCasesModule {}
