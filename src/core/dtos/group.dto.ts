import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGroupDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  entraineur: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  joueurs: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  niveau: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nom: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  age: number[];
}

export class UpdateGroupDto {
  @ApiPropertyOptional()
  @IsString()
  entraineur?: string;

  @ApiPropertyOptional()
  @IsString()
  joueurs?: string;

  @ApiPropertyOptional()
  @IsString()
  niveau?: string;

  @ApiPropertyOptional()
  @IsString()
  nom?: string;

  @ApiPropertyOptional()
  @IsString()
  age?: number[];
}

export class DeleteGroupDto {
  id: string;
}
