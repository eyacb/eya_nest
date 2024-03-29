import { Module } from "@nestjs/common";
import { SocketModule } from "src/frameworks/socket/socket-services.module";
import { BcryptServicesModule } from "src/services/bcrypt-services/bcrypt-services.module";
import { DataServicesModule } from "../../services/data-services/data-services.module";
import { EvenementUseCases } from "./evenement.use-case";
import { EvenementFactoryService } from "./evenement-factory.service";
import { IDataServices } from "src/core";

@Module({
  imports: [DataServicesModule],
  providers: [EvenementFactoryService, EvenementUseCases],
  exports: [EvenementFactoryService, EvenementUseCases],
})
export class EvenementUseCasesModule {}
