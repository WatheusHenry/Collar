// src/users/dto/create-user.dto.ts
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from 'class-validator';

@ApiTags('Auth')
export class CreateUserDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
  })
  @IsString()
  @MinLength(6)
  password: string;
}
