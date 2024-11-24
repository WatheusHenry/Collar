import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { PublicationService } from '../services/publication.service';
import { FilesInterceptor } from '@nestjs/platform-express';

import { ApiTags } from '@nestjs/swagger';
import { CreatePublicationDto } from 'src/dto/create-publication.dto';
import { PublicationWithLikes } from '../services/publication.service'; // ajuste o caminho conforme necessário
// import { diskStorage, memoryStorage } from 'multer';

@ApiTags('Publications')
@Controller('publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 4)) // O campo 'images' será onde esperamos o arquivo
  create(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() publicationDto: CreatePublicationDto,
  ) {
    return this.publicationService.create(files, publicationDto);
  }

  @Get()
  findAll(): Promise<PublicationWithLikes[]> {
    return this.publicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationService.findOne(+id);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.publicationService.findByUserId(+userId);
  }

  @Post('/like')
  async likePublication(
    @Body() body: { userId: number; publicationId: number },
  ) {
    const { userId, publicationId } = body;

    if (!publicationId || !userId) {
      throw new HttpException(
        'Missing userId or publicationId',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      return await this.publicationService.likePublication(
        publicationId,
        userId,
      );
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to like publication',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id/likes')
  async checkIfUserLiked(
    @Param('id') publicationId: number,
    @Query('userId') userId: number,
  ) {
    return this.publicationService.checkIfUserLiked(publicationId, userId);
  }

  @Post('/search')
  async searchPublications(@Body() body: { searchQuery: string }) {
    const searchQuery = body.searchQuery;
    return this.publicationService.searchPublications(searchQuery);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationService.remove(+id);
  }
}
