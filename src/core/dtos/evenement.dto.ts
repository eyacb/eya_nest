import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEvenementDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    titre: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    dateDebut: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    dateFin: Date;


}

export class UpdateEvenementDto {

    @ApiPropertyOptional()
    @IsString()
    titre?: string;

    @ApiPropertyOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional()
    @IsString()
    dateDebut?: Date;

    @ApiPropertyOptional()
    @IsString()
    dateFin?: Date;

   
}

export class DeleteEvenementDto{
    id: string;

}
