import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from '../dto/create-like.dto';
import { UpdateLikeDto } from '../dto/update-like.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Publication } from 'src/entities/publication.entity';
import { Like } from 'src/entities/like.entity';
import { MinioService } from './minio.service';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private likeRepository: Repository<Like>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
    private readonly minioService: MinioService,

  ) {}

  create(createLikeDto: CreateLikeDto) {
    return 'This action adds a new like';
  }

  findAll() {
    return `This action returns all like`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }

  async findLikedPublicationsByUser(userId: number): Promise<any[]> {
    // Busca os likes do usuário com as publicações relacionadas
    const userLikes = await this.likeRepository.find({
      where: { user: { id: userId } },
      relations: ['publication', 'publication.user'],
    });
  
    if (!userLikes.length) {
      return []; // Retorna uma lista vazia se o usuário não tiver curtido nada
    }
  
    // Mapeia as publicações relacionadas aos likes do usuário
    const likedPublications = userLikes.map((like) => like.publication);
  
    // Processa as publicações para adicionar contagem de likes e imagens
    return Promise.all(
      likedPublications.map(async (publication) => {
        const likeCount = await this.likeRepository.count({
          where: { publication: { id: publication.id } },
        });
  
        const likes = await this.likeRepository.find({
          where: { publication: { id: publication.id } },
          relations: ['user'],
        });
  
        return {
          ...publication,
          likeCount,
          likes: likes.map((like) => like.user.id), // IDs dos usuários que curtiram
          images: publication.images.map((imageName) =>
            this.minioService.getFileUrl('publications', imageName),
          ),
        };
      }),
    );
  }
  
}
