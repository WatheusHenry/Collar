import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { MinioService } from 'src/services/minio.service';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    MulterModule.register({
      dest: './uploads', // Pasta temporária para armazenar arquivos
    }),
  ], // Importa o UserRepository
  controllers: [UserController],
  providers: [UserService, MinioService],
  exports: [MinioService, UserService],
})
export class UserModule {}
