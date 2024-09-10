// src/users/user.controller.ts
import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { UserService } from 'src/services/users.service';
import { User } from '../entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/create-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto):Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }
}
