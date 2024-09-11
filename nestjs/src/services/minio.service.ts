import { Injectable, Logger } from '@nestjs/common';
import * as MinIO from 'minio';
import { streamToBuffer } from 'src/helpers/stream.utils';
import { Readable } from 'stream';

@Injectable()
export class MinioService {

  private minioClient: MinIO.Client;
  private readonly logger = new Logger(MinioService.name);


  constructor() {
    this.minioClient = new MinIO.Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'EunJeIWSDpixZFu0Iju2',
      secretKey: 'Ru1Nxol5ytoDmF4n8W4ypKbioOvVLUg0Rm6jYKxu',
    });
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
    if (!file || !file.buffer) {
      throw new Error('File or file buffer is undefined');
    }

    const stream = Readable.from(file.buffer);
    const metaData = {
      'Content-Type': file.mimetype,
    };

    // Verifique se o bucket existe
    const bucketExists = await this.minioClient.bucketExists(bucketName);
    if (!bucketExists) {
      await this.minioClient.makeBucket(bucketName, 'us-east-1');
    }

    // Faça upload do arquivo usando putObject
    return this.minioClient.putObject(bucketName, fileName, stream, file.size, metaData);
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
