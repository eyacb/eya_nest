import{ IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import{ ApiProperty, ApiPropertyOptional } from"@nestjs/swagger";


export class CreateAssociationDto{

    @ApiProperty({description:"name of association"})
    @IsNotEmpty()
    @IsString()
    name:string;


    @ApiProperty({description:"email of association"})
    @IsNotEmpty()
    @IsString()
    email:string;


    @ApiProperty({description:"password of association"})
    @IsNotEmpty()
    @IsString()
    password:string;
    
}
export class UpdateAssociationDto {
    @ApiPropertyOptional()
    @IsDate()
    createdAt: Date;
  
    @ApiPropertyOptional()
    @IsDate()
    updatedAt: Date;
  
    @ApiProperty({ description: "name of association" })
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @ApiPropertyOptional()
    @IsEmail()
    email: string;
  
    @ApiPropertyOptional()
    @IsString()
    password: string;
  
  }
  
export class DeleteAssociationDto{

} 

export class UpdateAssociationPasswordDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    currentPassword: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    newPassword: string;
  }
  