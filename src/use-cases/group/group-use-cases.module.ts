import { Module } from "@nestjs/common";
import { SocketModule } from "src/frameworks/socket/socket-services.module";
import { BcryptServicesModule } from "src/services/bcrypt-services/bcrypt-services.module";
import { DataServicesModule } from "../../services/data-services/data-services.module";
import { GroupUseCases } from "./group.use-case";
import { GroupFactoryService } from "./group-factory.service";

@Module({
  imports: [DataServicesModule, SocketModule, BcryptServicesModule],
  providers: [GroupFactoryService, GroupUseCases],
  exports: [GroupFactoryService, GroupUseCases],
})
export class GroupUseCasesModule {}
