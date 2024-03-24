import { Module } from "@nestjs/common";
import { UserController, LoginController, CompetitionController, SceanceController, ChatController, MessageController } from "./controllers";
import { DataServicesModule } from "./services/data-services/data-services.module";
import { UserUseCasesModule } from "./use-cases/user/user-use-cases.module";
import { BcryptServicesModule } from "./services";
import { LoginUseCasesModule } from "./use-cases/login/login-use-cases.module";

import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./core/strategy/jwt.stratgy";
import { NotificationsUseCasesModule } from "./use-cases/notifications/notifications-use-cases.module";
import { NotificationsController } from "./controllers/notifications.controller";
import { SocketModule } from "./frameworks/socket/socket-services.module";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { AssociationController } from "./controllers/association.controller";
import { AssociationUseCasesModule } from "./use-cases/association/association-use-cases.module";
import { CompetitionUseCasesModule } from "./use-cases/competition/competition-use-cases.module";
import { MailerService } from "./frameworks/mailer/mailer-services.service";
import { SceanceUseCasesModule } from "./use-cases/sceance/seance-use-cases.module";
import { GroupUseCasesModule } from "./use-cases/group/group-use-cases.module";
import { ChatUseCaseModule } from "./use-cases/chat/chat-use-cases.module";
import { MessageUseCaseModule } from "./use-cases/message/message-use-cases.module";
import { MessageFactoryService } from "./use-cases/message/message-factory.service";


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads"),
      serveRoot: "/uploads",
    }),
    JwtModule.register({
      secret: "your-secret-key",
      signOptions: { expiresIn: "1d" },
    }),
    DataServicesModule,
    UserUseCasesModule,
    BcryptServicesModule,
    LoginUseCasesModule,
    NotificationsUseCasesModule,
    AssociationUseCasesModule,
    SocketModule,
    CompetitionUseCasesModule,
    SceanceUseCasesModule,
    ChatUseCaseModule,
    MessageUseCaseModule ,
    GroupUseCasesModule,
  ],
  providers: [JwtStrategy,
    MailerService,
  MessageFactoryService],
  controllers: [
    UserController,
    LoginController,
    NotificationsController,
    AssociationController,
    CompetitionController,
    SceanceController,
    ChatController,
    MessageController,
  
  ],
})
export class AppModule { }
