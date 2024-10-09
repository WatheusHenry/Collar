import { Module } from '@nestjs/common';
import { PublicationService } from '../services/publication.service';
import { PublicationController } from '../controllers/publication.controller';
import { MinioService } from 'src/services/minio.service';
import { Publication } from 'src/entities/publication.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { MulterModule } from '@nestjs/platform-express';
import { Like } from 'src/entities/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Publication, User,Like]),
  MulterModule.register({
    dest: './uploads',
  }),],
  controllers: [PublicationController],
  providers: [PublicationService, MinioService],
  exports: [MinioService]
})
export class PublicationModule { }
