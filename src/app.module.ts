import { Module } from "@nestjs/common";
import { UserController, LoginController } from "./controllers";
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
import { AdultMemberUseCasesModule } from "./use-cases/user/adult-member/adult-member-use-cases.module";
import { AdultMemberController } from "./controllers/users/adult-member.controller";

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
    AdultMemberUseCasesModule,
    NotificationsUseCasesModule,
    AssociationUseCasesModule,
    SocketModule,
    
  ],
  providers: [JwtStrategy],
  controllers: [UserController, LoginController, NotificationsController, AssociationController,AdultMemberController],
})
export class AppModule {}
