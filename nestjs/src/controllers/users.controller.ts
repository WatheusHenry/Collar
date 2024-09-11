// src/users/user.controller.ts
import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { UserService } from 'src/services/users.service';
import { User } from '../entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto'; // Novo DTO para atualizar
import { UpdateUserPasswordDto } from 'src/dto/update-user-password.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
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

  // Função para atualizar os dados do usuário
  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  // Função para atualizar a senha do usuário
  @Patch(':id/password')
  async updatePassword(@Param('id') id: number, @Body() updateUserPassword: UpdateUserPasswordDto): Promise<User> {
    return this.userService.updatePassword(id, updateUserPassword);
  }

  // Função para deletar o usuário
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
