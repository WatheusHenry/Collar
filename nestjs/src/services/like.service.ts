import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from '../dto/create-like.dto';
import { UpdateLikeDto } from '../dto/update-like.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Publication } from 'src/entities/publication.entity';
import { Like } from 'src/entities/like.entity';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private likeRepository: Repository<Like>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,
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

  async findLikedPublicationsByUser(userId: number): Promise<Publication[]> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const likes = await this.likeRepository.find({
      where: { user: { id: userId } },
      relations: ['publication'],
    });

    if (!likes.length) {
      throw new Error('No likes found for this user');
    }

    // Retornar as publicações associadas aos likes
    return likes.map((like) => like.publication);
  }
}
