import { Module } from '@nestjs/common';
import { LikeService } from '../services/like.service';
import { LikeController } from '../controllers/like.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importando TypeOrmModule
import { Like } from '../entities/like.entity'; // Importando a entidade Like
import { User } from '../entities/user.entity'; // Importando a entidade User
import { Publication } from '../entities/publication.entity'; // Importando a entidade Publication

@Module({
  imports: [TypeOrmModule.forFeature([Like, User, Publication])], // Registrando os repositórios aqui
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
