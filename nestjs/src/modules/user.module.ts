import { Module } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { UserController } from '../controllers/users.controller';
import { MinioService } from 'src/services/minio.service';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa o UserRepository
  controllers: [UserController],
  providers: [UserService,MinioService],
  exports: [MinioService]
})
export class UsersModule {}
