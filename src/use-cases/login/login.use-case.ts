import { Injectable, NotFoundException } from "@nestjs/common";
import { LoginRequestDto, LoginResponseDto, TwoFactorDto } from "src/core/dtos";
import { JwtService } from "src/frameworks/jwt/jwt-services.service";
import { LoginFactoryService } from "./login-factory.service";
import { IBcryptService, IDataServices, User } from "src/core";
import { MailerService } from "src/frameworks/mailer/mailer-services.service";
import { resetTemplate } from "src/core/mailerTemplates/resetPassTemplate";
import { twoFACodeTemplate } from "src/core/mailerTemplates/codeTemplate";
import { FRONT_END_URL } from "src/configuration";
import { log } from "console";

@Injectable()
export class LoginUseCase {
  constructor(
    private dataServices: IDataServices,
    private bcryptService: IBcryptService,
    private jwtService: JwtService,
    private mailerService: MailerService,
    private loginFactoryService: LoginFactoryService
  ) {}
  private generateTwoFactorCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.dataServices.users.findByAttribute("email", email);
    if (!user) return null;

    const isPasswordValid = await this.bcryptService.comparePassword(
      password,
      user.password
    );
    return isPasswordValid ? user : null;
  }

  async login(credentials: LoginRequestDto): Promise<LoginResponseDto> {
    const { email, password } = credentials;
    const user: any = await this.validateUser(email, password);
    if (!user) throw new NotFoundException("Email or Password incorrect.");

    const twoFactorCode = this.generateTwoFactorCode();
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 10); // 10 minutes

    user.twoFactorCode = twoFactorCode;
    user.twoFactorExpiration = expirationTime;
    await this.dataServices.users.update(user.id, {
      ...user,
    });
    // await this.mailerService.sendEmail(
    //   user.email,
    //   "Two-Factor Authentication Code",
    //   twoFACodeTemplate(twoFactorCode)
    // );

    const token = this.jwtService.generateToken({ userId: user.id }, "1d");
    return this.loginFactoryService.createLoginResponse(token);

    //return "2FA code sent to email.";
  }

  async verifyTwoFactorCode(
    twoFactorInput: TwoFactorDto
  ): Promise<LoginResponseDto> {
    const user: any = await this.dataServices.users.findByAttribute(
      "email",
      twoFactorInput.email
    );
    if (
      !user ||
      user.twoFactorCode !== twoFactorInput.code ||
      new Date() > user.twoFactorExpiration
    ) {
      throw new NotFoundException("Invalid or expired 2FA code.");
    }
    user.twoFactorCode = null;
    user.twoFactorExpiration = null;
    await this.dataServices.users.update(user.id, {
      ...user,
    });

    const token = this.jwtService.generateToken({ userId: user.id }, "1d");
    return this.loginFactoryService.createLoginResponse(token);
  }
  async forgotPassword(email: string): Promise<string> {
    const user: any = await this.dataServices.users.findByAttribute(
      "email",
      email
    );
    if (!user) throw new NotFoundException("User not found.");

    const resetToken = this.jwtService.generateToken({ userId: user.id }, "1h");
    const resetPasswordLink = `${FRONT_END_URL}/auth/reset-password?token=${resetToken}`;
    await this.mailerService.sendEmail(
      user.email,
      "reset-password",
      resetTemplate(resetPasswordLink)
    );
  return "A link has been sent to your email";
  
  }

  async resetPassword(token: string, newPassword: string): Promise<string> {
    const userId = this.jwtService.verifyResetToken(token);
    log(' test payload    '+userId);
    if (!userId) throw new NotFoundException("Invalid or expired token");

    const user = await this.dataServices.users.get(userId);
    if (!user) throw new NotFoundException("User not found");

    const hashedNewPassword = await this.bcryptService.hashPassword(
      newPassword
    );
    user.password = hashedNewPassword;
    await this.dataServices.users.update(userId, {
      ...user,
    });
    return "Password updated successfully.";
  }

  async loadUserDetails(userId: string): Promise<User | null> {
    return await this.dataServices.users.get(userId);
  }

  async verifyToken(token:string): Promise<boolean> {
    const verificationResult = this.jwtService.verifyToken(token);
    return verificationResult? true : false;
  }
}
