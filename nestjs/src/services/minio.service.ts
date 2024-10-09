import { Injectable, Logger } from '@nestjs/common';
import * as MinIO from 'minio';
import { Readable } from 'stream';
import * as fs from 'fs'; // Para lidar com arquivos no disco


@Injectable()
export class MinioService {

  private minioClient: MinIO.Client;
  private readonly logger = new Logger(MinioService.name);
  private readonly baseUrl: string; // URL base para gerar as URLs dos arquivos


  constructor() {
    this.minioClient = new MinIO.Client({
      endPoint: '20.206.249.227',
      port: 9000,
      useSSL: false,
      accessKey: 'Nr4i3r5e6r6rZcMbyfX6',
      secretKey: 'sSm2R2YEsWFoxQr839AhhJW1STWUyz6yOk7Z9zHc',
    });

    this.baseUrl = 'http://20.206.249.227:9000';

  }

  async createBucket(bucketName: string): Promise<void> {
    try {
      const bucketExists = await this.minioClient.bucketExists(bucketName);
      if (!bucketExists) {
        await this.minioClient.makeBucket(bucketName, 'us-east-1');
        console.log(`Bucket ${bucketName} created.`);
      } else {
        console.log(`Bucket ${bucketName} already exists.`);
      }
    } catch (error) {
      console.error('Error creating bucket:', error);
      throw error;
    }
  }


  async upload(file: Express.Multer.File, bucketName: string, fileName: string) {
    if (!file) {
      throw new Error('File is undefined');
    }


    let stream: Readable;
    if (file.buffer) {
      stream = Readable.from(file.buffer);
    } else if (file.path) {
      stream = fs.createReadStream(file.path);
    } else {
      throw new Error('File or file path is undefined');
    }

    const metaData = {
      'Content-Type': file.mimetype,
    };

    const bucketExists = await this.minioClient.bucketExists(bucketName);
    if (!bucketExists) {
      await this.minioClient.makeBucket(bucketName, 'us-east-1');
    }

    // Upload do arquivo
    return this.minioClient.putObject(bucketName, fileName, stream, file.size, metaData);
  }

  getFileUrl(bucketName: string, fileName: string): string {
    return `${this.baseUrl}/${bucketName}/${fileName}`;
  }



  async getFile(bucketName: string, objectName: string): Promise < Buffer > {
  try {
    const dataStream = await this.minioClient.getObject(bucketName, objectName);
    return await this.streamToBuffer(dataStream);
  } catch(error) {
    console.error('Error getting file:', error);
    throw error;
  }
}

  private streamToBuffer(stream: NodeJS.ReadableStream): Promise < Buffer > {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}
}
