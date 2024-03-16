import { Module } from "@nestjs/common";
import { DataServicesModule } from "../../services/data-services/data-services.module";
import { AssociationFactoryservice } from "./association-factory.service";
import{AssociationUseCases}from"./association.use-case";
import { SocketModule } from "src/frameworks/socket/socket-services.module";
import { BcryptServicesModule } from "src/services/bcrypt-services/bcrypt-services.module";

@Module({
    imports:[DataServicesModule,SocketModule,BcryptServicesModule,],
    providers:[
        AssociationFactoryservice,
        AssociationUseCases,
    ],
    exports:[
        AssociationFactoryservice,
        AssociationUseCases,
    ]
})
export class AssociationUseCasesModule{}