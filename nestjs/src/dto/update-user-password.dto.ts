import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateUserPasswordDto extends PartialType(CreateUserDto) {

  @ApiProperty({ description: 'The password of the user', example: 'password123' })
  @IsOptional()
  @IsString()
  password?: string;
}
