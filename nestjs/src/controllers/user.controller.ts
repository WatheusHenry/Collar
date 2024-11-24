// src/users/user.controller.ts
import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { User } from '../entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto'; // Novo DTO para atualizar
import { UpdateUserPasswordDto } from 'src/dto/update-user-password.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseInterceptors(FileInterceptor('profilePicture')) // Nome do campo esperado no upload
  async createUser(
    @Body() createUserDto: CreateUserDto,
    file?: Express.Multer.File,
  ): Promise<User> {
    return this.userService.create(createUserDto, file);
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
  @Post(':id')
  @UseInterceptors(FileInterceptor('profilePicture'))
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<User> {
    console.log(updateUserDto)
    return this.userService.update(id, updateUserDto, file);
  }

  // Função para atualizar a senha do usuário
  @Patch(':id/password')
  async updatePassword(
    @Param('id') id: number,
    @Body() updateUserPassword: UpdateUserPasswordDto,
  ): Promise<User> {
    return this.userService.updatePassword(id, updateUserPassword);
  }

  // Função para deletar o usuário
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
