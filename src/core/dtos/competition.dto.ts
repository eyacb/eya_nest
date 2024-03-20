import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

interface Joueur {
    id: number;
    nom: string;
  }

export class CreateCompetitionDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nom: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    dateDebut: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    dateFin: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    score: number[]; 

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    joueurs: Joueur[];

}

export class UpdateCompetitionDto {

    @ApiPropertyOptional()
    @IsString()
    nom?: string;

    @ApiPropertyOptional()
    @IsString()
    dateDebut?: Date;

    @ApiPropertyOptional()
    @IsString()
    dateFin?: Date;

    @ApiPropertyOptional()
    @IsString()
    score?: number[]; 

    @ApiPropertyOptional()
    @IsString()
    joueurs?: Joueur[];
}

export class DeleteCompetitionDto{
    id: string;

}
