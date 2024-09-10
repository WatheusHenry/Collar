import { Module } from '@nestjs/common';
import { PublicationService } from '../services/publication.service';
import { PublicationController } from '../controllers/publication.controller';
import { MinioService } from 'src/services/minio.service';
import { Publication } from 'src/entities/publication.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Publication])], // Importa o UserRepository
  controllers: [PublicationController],
  providers: [PublicationService, MinioService],
  exports: [MinioService]
})
export class PublicationModule { }
