import { Module } from '@nestjs/common';
import { SocketModule } from "src/frameworks/socket/socket-services.module";
import { BcryptServicesModule } from "src/services/bcrypt-services/bcrypt-services.module";
import { DataServicesModule } from "../../services/data-services/data-services.module";
import { CompetitionFactoryService } from './competition-factory.service';
import { CompetitionUseCases } from './association.use-case';


@Module({
  imports: [DataServicesModule,SocketModule,BcryptServicesModule,],
  providers:  [
    CompetitionFactoryService,
    CompetitionUseCases,
],
  exports: [
    CompetitionFactoryService,
    CompetitionUseCases,
],
})
export class CompetitionUseCasesModule {}
