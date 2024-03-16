import { Controller, Post, Body, UseGuards, Get } from "@nestjs/common";
import { ApiBody, ApiTags, ApiParam, ApiBearerAuth } from "@nestjs/swagger";
import { User } from "src/core";
import { CurrentUser } from "src/core/decorators/user.decorator";
import {
  ForgotPasswordRequestDto,
  LoginRequestDto,
  ResetPasswordRequestDto,
  TwoFactorDto,
  LoginResponseDto,
  VerifyTokenDto,
} from "src/core/dtos";
import { JwtAuthGuard } from "src/core/guards/jwtauth.guard";
import { LoginUseCase } from "src/use-cases/login/login.use-case";
@ApiTags("auth")
@Controller("auth")
export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post("login")
  async login(@Body() credentials: LoginRequestDto): Promise<LoginResponseDto> {
    const loginResponse = await this.loginUseCase.login(credentials);
    return loginResponse;
  }

  @Post("two-factor-auth")
  async verifyTwoFactorCode(
    @Body() twoFactorInput: TwoFactorDto
  ): Promise<LoginResponseDto> {
    const loginResponse = await this.loginUseCase.verifyTwoFactorCode(
      twoFactorInput
    );
    return loginResponse;
  }

  @Post("forgot-password")
  @ApiBody({ type: ForgotPasswordRequestDto })
  async forgotPassword(
    @Body() input: ForgotPasswordRequestDto
  ): Promise<string> {
    return await this.loginUseCase.forgotPassword(input.email);
  }

  @Post("reset-password")
  @ApiBody({ type: ResetPasswordRequestDto })
  async resetPassword(
    @Body() resetPasswordRequest: ResetPasswordRequestDto
  ): Promise<any> {
    return await this.loginUseCase.resetPassword(
      resetPasswordRequest.token,
      resetPasswordRequest.password
    );
  }
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get("loadMe")
  async loadMeEndpoint(@CurrentUser() user: any): Promise<User> {
    return await this.loginUseCase.loadUserDetails(user.userId);
  }
  @Post("verify-token")
  @ApiBody({ type: VerifyTokenDto })
  async verifyToken(
    @Body() verifyToken: VerifyTokenDto
  ): Promise<any> {
    return await this.loginUseCase.verifyToken(
      verifyToken.token
    );
  }
}
