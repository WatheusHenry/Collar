// src/controllers/publication.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PublicationService } from '../services/publication.service';
// import { CreatePublicationDto } from '../dto/create-publication.dto';
// import { UpdatePublicationDto } from '../dto/update-publication.dto';
// import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ApiTags } from '@nestjs/swagger';
import { CreatePublicationDto } from 'src/dto/create-publication.dto';

@ApiTags('Publications')
@Controller('publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) { }

  @Post()
  @UseInterceptors(FilesInterceptor('images', 10, {
    storage: memoryStorage(), // Armazena arquivos na memória
  }))
  async create(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() publicationDto: CreatePublicationDto) {
    console.log(files, publicationDto); // Verifique se o buffer está presente agora
    return this.publicationService.create(files, publicationDto);
  }


  @Get()
  findAll() {
    return this.publicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicationService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePublicationDto: UpdatePublicationDto) {
  //   return this.publicationService.update(+id, updatePublicationDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationService.remove(+id);
  }
}
