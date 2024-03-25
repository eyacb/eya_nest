import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
class ParticipantDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  handicap: number;

  @IsNumber()
  score: number;

  @IsBoolean()
  scoreSigned: boolean;
}

export class CreateCompetitionDto {
    @ApiPropertyOptional()
    @IsDate()
  date: Date;

  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  organizer: string;

  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  startTime: string;

  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  endTime: string;

  @ApiPropertyOptional()
  @IsNumber()
  participationFee: number;

  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  feeType: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  packaging: string[];

  @ApiPropertyOptional()
  @IsBoolean()
  registrationStatus: boolean;

  @IsBoolean()
  paymentStatus: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  signatureStatus: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  startListStatus: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  resultStatus: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  multiDayStatus: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  multiDayFeeStatus: boolean;
  
  @ApiPropertyOptional()
  @IsString()
  participants: ParticipantDto[];
}

export class UpdateCompetitionDto extends CreateCompetitionDto {
  @IsNumber()
  id: number;
}

export class DeleteCompetitionDto {
  @IsNumber()
  id: number;
}
