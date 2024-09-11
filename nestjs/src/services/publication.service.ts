import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publication } from '../entities/publication.entity';
import { User } from '../entities/user.entity';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { MinioService } from './minio.service';

@Injectable()
export class PublicationService {
  constructor(
    private readonly minioService: MinioService,

    @InjectRepository(Publication)
    private publicationRepository: Repository<Publication>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(files: Express.Multer.File[], publicationDto: CreatePublicationDto) {
    if (!files || files.length === 0) {
      throw new Error('No files uploaded');
    }

    const imageNames = [];

    for (const file of files) {
      const fileName = `${Date.now()}-${file.originalname}`;
      await this.minioService.upload(file, 'publications', fileName); // Chama o serviço de upload do MinIO
      imageNames.push(fileName);
    }

    // Buscar o usuário com base no userId
    const user = await this.userRepository.findOne({ where: { id: publicationDto.userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${publicationDto.userId} not found`);
    }

    // Crie a publicação no banco de dados com os dados do DTO e os nomes das imagens
    const publication = this.publicationRepository.create({
      ...publicationDto,
      images: imageNames,
      user,  // Associe o usuário à publicação
    });

    return this.publicationRepository.save(publication);
  }

  async findAll(): Promise<Publication[]> {
    return this.publicationRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Publication> {
    return this.publicationRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async remove(id: number): Promise<void> {
    await this.publicationRepository.delete(id);
  }
}
