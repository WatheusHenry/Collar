import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateUserDto extends PartialType(CreateUserDto) {
  
  @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'The email of the user', example: 'user@example.com' })
  @IsOptional()
  @IsString()
  email?: string;

}
