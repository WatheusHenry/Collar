import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
} from 'class-validator';

export class CreatePublicationDto {
  @ApiProperty({ example: 'Animal perdido na rua XYZ.' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'Animal perdido na rua XYZ.' })
  @IsNotEmpty()
  @IsString()
  contactInfos: string;


  @ApiProperty({ example: 'perdido' })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ example: 'Marília' })
  @IsNotEmpty()
  @IsString()
  location: string;

  @IsArray()
  @IsOptional()
  images: string[];
}
