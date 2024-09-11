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
      await this.minioService.upload(file, 'publications', fileName);
      imageNames.push(fileName);
    }

    const user = await this.userRepository.findOne({ where: { id: publicationDto.userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${publicationDto.userId} not found`);
    }

    const publication = this.publicationRepository.create({
      ...publicationDto,
      images: imageNames,
      user,
    });

    return this.publicationRepository.save(publication);
  }

  async findAll(): Promise<Publication[]> {
    const publications = await this.publicationRepository.find({ relations: ['user'] });
    console.log(publications)
    return publications.map(publication => ({
      ...publication,
      images: publication.images.map(imageName =>
        this.minioService.getFileUrl('publications', imageName)
      ),
    }));
  }

  async findOne(id: number): Promise<Publication> {
    const publication = await this.publicationRepository.findOne({ where: { id }, relations: ['user'] });
    if (!publication) {
      throw new NotFoundException(`Publication with ID ${id} not found`);
    }

    return {
      ...publication,
      images: publication.images.map(imageName =>
        this.minioService.getFileUrl('publications', imageName)
      ),
    };
  }

  async remove(id: number): Promise<void> {
    await this.publicationRepository.delete(id);
  }
}
