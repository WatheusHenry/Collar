import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar o Swagger
  const config = new DocumentBuilder()
    .setTitle('Collar API')
    .setDescription('The API for a mobile aplication')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors({
    origin: '*',
    methods: '*',
    credentials: true,

  });

  await app.listen(3000);
}
bootstrap();
