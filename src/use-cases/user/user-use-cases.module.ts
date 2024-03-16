import { Module } from "@nestjs/common";
import { DataServicesModule } from "../../services/data-services/data-services.module";
import { UserFactoryService } from "./user-factory.service";
import { UserUseCases } from "./user.use-case";
import { BcryptModule } from "src/frameworks/bcrypt/bcrypt-services.module";

@Module({
  imports: [DataServicesModule, BcryptModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule {}
