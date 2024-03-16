import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserController } from "./user.contoller";

@ApiTags("api/adult-member")
@Controller("api/adult-member")
export class AdultMemberController extends UserController {}