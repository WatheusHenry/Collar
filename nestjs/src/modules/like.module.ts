import { Module } from '@nestjs/common';
import { LikeService } from '../services/like.service';
import { LikeController } from '../controllers/like.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importando TypeOrmModule
import { Like } from '../entities/like.entity'; // Importando a entidade Like
import { User } from '../entities/user.entity'; // Importando a entidade User
import { Publication } from '../entities/publication.entity'; // Importando a entidade Publication
import { MinioService } from 'src/services/minio.service';

@Module({
  imports: [TypeOrmModule.forFeature([Like, User, Publication])], // Adicionando o módulo que exporta MinioService
  controllers: [LikeController],
  providers: [LikeService,MinioService],
})
export class LikeModule {}
