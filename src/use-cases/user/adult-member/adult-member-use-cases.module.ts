import { Module } from "@nestjs/common";
import { BcryptModule } from "src/frameworks/bcrypt/bcrypt-services.module";
import { DataServicesModule } from "src/services";
import { AdultMemberFactoryService } from "./adult-member-factory.service";
import { AdultMemberUseCases } from "./adult-member.use-case";

@Module({
    imports: [DataServicesModule, BcryptModule],
    providers: [AdultMemberFactoryService],
    exports: [AdultMemberFactoryService, AdultMemberUseCases],
})
export class AdultMemberUseCasesModule{}