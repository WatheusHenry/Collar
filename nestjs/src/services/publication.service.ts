import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publication } from '../entities/publication.entity';
import { User } from '../entities/user.entity';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { MinioService } from './minio.service';
import { Like } from 'src/entities/like.entity';

export interface PublicationWithLikes {
  id: number;
  description: string;
  status: string;
  location: string;
  user: User;
  createdAt: Date;
  likeCount: number;
  likes: number[]; // IDs dos usuários que curtiram
  images: string[]; // URLs das imagens
}

@Injectable()
export class PublicationService {
  constructor(
    private readonly minioService: MinioService,

    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Like)
    private likeRepository: Repository<Like>,
  ) {}

  async create(
    files: Express.Multer.File[],
    publicationDto: CreatePublicationDto,
  ) {
    if (!files) {
      throw new Error('No files uploaded');
    }
    const imageNames = [];

    for (const file of files) {
      const fileName = `${Date.now()}-${file.originalname}`;
      await this.minioService.upload(file, 'publications', fileName);
      imageNames.push(fileName);
    }

    const user = await this.userRepository.findOne({
      where: { id: publicationDto.userId },
    });
    if (!user) {
      throw new NotFoundException(
        `User with ID ${publicationDto.userId} not found`,
      );
    }

    const publication = this.publicationRepository.create({
      ...publicationDto,
      images: imageNames,
      user,
    });

    return this.publicationRepository.save(publication);
  }

  async findAll(): Promise<PublicationWithLikes[]> {
    const publications = await this.publicationRepository.find({
      relations: ['user'],
    });

    return Promise.all(
      publications.map(async (publication) => {
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
          likes: likes.map((like) => like.user.id),
          images: publication.images.map((imageName) =>
            this.minioService.getFileUrl('publications', imageName),
          ),
        };
      }),
    );
  }

  async findOne(id: number): Promise<PublicationWithLikes> {
    const publication = await this.publicationRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!publication) {
      throw new NotFoundException(`Publication with ID ${id} not found`);
    }

    const likeCount = await this.likeRepository.count({
      where: { publication: { id } },
    });
    const likes = await this.likeRepository.find({
      where: { publication: { id } },
      relations: ['user'],
    });

    return {
      ...publication,
      likeCount,
      likes: likes.map((like) => like.user.id),
      images: publication.images.map((imageName) =>
        this.minioService.getFileUrl('publications', imageName),
      ),
    };
  }

  async findByUserId(userId: number): Promise<PublicationWithLikes[]> {
    const publications = await this.publicationRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!publications || publications.length === 0) {
      throw new NotFoundException(
        `No publications found for user ID ${userId}`,
      );
    }

    return Promise.all(
      publications.map(async (publication) => {
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
          likes: likes.map((like) => like.user.id),
          images: publication.images.map((imageName) =>
            this.minioService.getFileUrl('publications', imageName),
          ),
        };
      }),
    );
  }

  async checkIfUserLiked(
    publicationId: number,
    userId: number,
  ): Promise<{ liked: boolean }> {
    const like = await this.likeRepository.findOne({
      where: { publication: { id: publicationId }, user: { id: userId } },
    });

    return { liked: !!like };
  }

  async searchPublications(query: string) {
  
    const publications = await this.publicationRepository
      .createQueryBuilder('publication')
      .leftJoinAndSelect('publication.user', 'user')
      .where('LOWER(publication.description) LIKE LOWER(:query)', { query: `%${query}%` })
      .orWhere('LOWER(publication.location) LIKE LOWER(:query)', { query: `%${query}%` })
      .orWhere('LOWER(user.name) LIKE LOWER(:query)', { query: `%${query}%` })
      .getMany();
  
  
    return this.mapPublicationsWithLikes(publications);
  }
  
  

  private async mapPublicationsWithLikes(
    publications: Publication[],
  ): Promise<PublicationWithLikes[]> {
    return Promise.all(
      publications.map(async (publication) => {
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
          likes: likes.map((like) => like.user.id),
          images: publication.images.map((imageName) =>
            this.minioService.getFileUrl('publications', imageName),
          ),
        };
      }),
    );
  }

  async remove(id: number): Promise<void> {
    await this.publicationRepository.delete(id);
  }

  async likePublication(
    publicationId: number,
    userId: number,
  ): Promise<PublicationWithLikes> {
    console.log(
      `Trying to like publication ${publicationId} for user ${userId}`,
    );

    const publication = await this.publicationRepository.findOne({
      where: { id: publicationId },
    });

    if (!publication) {
      throw new NotFoundException(
        `Publication with ID ${publicationId} not found`,
      );
    }

    const existingLike = await this.likeRepository.findOne({
      where: { publication: { id: publicationId }, user: { id: userId } },
    });

    if (existingLike) {
      await this.likeRepository.remove(existingLike);
    } else {
      const like = this.likeRepository.create({
        publication,
        user: { id: userId },
      });
      await this.likeRepository.save(like);
    }

    return this.findOne(publicationId); // Retorna a publicação atualizada
  }
}
