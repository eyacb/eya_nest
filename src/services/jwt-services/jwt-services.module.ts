import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [],
  exports: [],
  providers: [JwtService],
})
export class JwtServicesModule {}
