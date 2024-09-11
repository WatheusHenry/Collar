import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import { AnimalsModule } from './modules/animals.module';
import { PublicationModule } from './modules/publication.module';
import { MinioService } from './services/minio.service';
import { User } from './entities/user.entity';
import { Publication } from './entities/publication.entity';

@Module({
  imports: [
  ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User,Publication],
    synchronize: true,
  } as TypeOrmModuleOptions),
  UserModule,
  AnimalsModule,
  PublicationModule],

  controllers: [AppController],
  providers: [AppService, MinioService],
  exports:[MinioService]
})
export class AppModule { }
