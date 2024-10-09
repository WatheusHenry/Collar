import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UseGuards, HttpException, HttpStatus, Query, BadRequestException, UploadedFile } from '@nestjs/common';
import { PublicationService } from '../services/publication.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ApiTags } from '@nestjs/swagger';
import { CreatePublicationDto } from 'src/dto/create-publication.dto';
import { PublicationWithLikes } from '../services/publication.service'; // ajuste o caminho conforme necessário

@ApiTags('Publications')
@Controller('publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) { }


  @Post()
  @UseInterceptors(FilesInterceptor('images', 4)) // Limita a até 4 arquivos
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() publicationDto: CreatePublicationDto) {
      console.log(publicationDto)
    return this.publicationService.create(files, publicationDto)
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
      throw new HttpException('Missing userId or publicationId', HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.publicationService.likePublication(publicationId, userId);
    } catch (error) {
      throw new HttpException(error.message || 'Failed to like publication', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id/likes')
  async checkIfUserLiked(
    @Param('id') publicationId: number,
    @Query('userId') userId: number,
  ) {
    return this.publicationService.checkIfUserLiked(publicationId, userId);
  }

  @Get('/search')
  async searchPublications(
    @Query('q') searchQuery: string,
  ): Promise<PublicationWithLikes[]> {
    return this.publicationService.searchPublications(searchQuery);
  }





  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationService.remove(+id);
  }
}
