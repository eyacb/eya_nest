import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSceanceDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  titre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  entraineur: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  DateEntrainement: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  heure: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  presence: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  type: string;
}

export class UpdateSceanceDto {
  @ApiPropertyOptional()
  @IsString()
  titre?: string;

  @ApiPropertyOptional()
  @IsString()
  entraineur?: string;

  @ApiPropertyOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsString()
  DateEntrainement?: Date;

  @ApiPropertyOptional()
  @IsString()
  heure?: string;

  @ApiPropertyOptional()
  @IsString()
  presence?: string[];

  @ApiPropertyOptional()
  @IsString()
  type?: string;
}

export class DeleteSceanceDto {
  id: string;
}
