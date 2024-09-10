import { Module } from '@nestjs/common';
import { AnimalsService } from '../services/animals.service';
import { AnimalsController } from '../controllers/animals.controller';
import { MinioService } from 'src/services/minio.service';

@Module({
  imports: [],
  controllers: [AnimalsController],
  providers: [AnimalsService, MinioService],
  exports: [MinioService]
})
export class AnimalsModule { }
