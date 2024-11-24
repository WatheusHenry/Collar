// src/services/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdateUserPasswordDto } from 'src/dto/update-user-password.dto';
import * as bcrypt from 'bcryptjs';
import { MinioService } from './minio.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly minioService: MinioService,
  ) {}

  async create(
    createUserDto: CreateUserDto,
    file: Express.Multer.File,
  ): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
  
    let user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  
    user = await this.userRepository.save(user); 
  
    const fileName = `user-${user.id}-${Date.now()}-${file.originalname}`;
    await this.minioService.upload(file, 'publications', fileName);
  
    const profilePictureUrl = this.minioService.getFileUrl(
      'publications',
      fileName,
    );
  
    user.profilePicture = profilePictureUrl;
  
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
    file?: Express.Multer.File,
  ): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);

    if (file) {
      const fileName = `user-${id}-${Date.now()}-${file.originalname}`;
      await this.minioService.upload(file, 'publications', fileName);
      const profilePictureUrl = this.minioService.getFileUrl('publications', fileName);
      user.profilePicture = profilePictureUrl;
    }

    return this.userRepository.save(user);
  }

  async updatePassword(
    id: number,
    newPassword: UpdateUserPasswordDto,
  ): Promise<User> {
    const user = await this.findOne(id);
    if (newPassword.password) {
      const salt = await bcrypt.genSalt(10);
      newPassword.password = await bcrypt.hash(newPassword.password, salt);
    }
    user.password = newPassword.password;
    return this.userRepository.save(user);
  }

  // Função para deletar o usuário
  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
