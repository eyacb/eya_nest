import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

interface Joueur {
    id: number;
    nom: string;
  }

export class CreateSceanceDto {
   
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    titre: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    entraineur:String;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: String;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    DateEntrainement:Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    heure:String;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    presence:String[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type:String;
   
  
}

export class UpdateSceanceDto {

    @ApiPropertyOptional()
    @IsString()
    titre?: string;

    @ApiPropertyOptional()
    @IsString()
    entraineur?:String;

    @ApiPropertyOptional()
    @IsString()
    description?: String;

    @ApiPropertyOptional()
    @IsString()
    DateEntrainement?:Date;

    @ApiPropertyOptional()
    @IsString()
    heure?:String;

    @ApiPropertyOptional()
    @IsString()
    presence?:String[];

    @ApiPropertyOptional()
    @IsString()
    type?:String;

}

export class DeleteSceanceDto{
    id: string;

}

