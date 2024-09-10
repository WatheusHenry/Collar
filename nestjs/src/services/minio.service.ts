import { Injectable } from '@nestjs/common';
import * as MinIO from 'minio';
import { streamToBuffer } from 'src/helpers/stream.utils';

@Injectable()
export class MinioService {
  private minioClient: MinIO.Client;

  constructor() {
    this.minioClient = new MinIO.Client({
      endPoint: process.env.MINIO_ENDPOINT,
      port: parseInt(process.env.MINIO_PORT),
      useSSL: false,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
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

  async uploadFile(bucketName: string, objectName: string, fileStream: ReadableStream<Uint8Array>): Promise<void> {
    try {
      const buffer = await streamToBuffer(fileStream as any);
      await this.minioClient.putObject(bucketName, objectName, buffer);
      console.log('File uploaded successfully.');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  async getFile(bucketName: string, objectName: string): Promise<Buffer> {
    try {
      const dataStream = await this.minioClient.getObject(bucketName, objectName);
      return await this.streamToBuffer(dataStream);
    } catch (error) {
      console.error('Error getting file:', error);
      throw error;
    }
  }

  private streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      stream.on('data', (chunk) => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });
  }
}
