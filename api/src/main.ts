import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('pixel palace')
    .setDescription('The pixel palace API description')
    .setVersion('1.0')
    .addTag('pixel palace')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {jsonDocumentUrl: 'api-json'});

  await app.listen(3000);
}
bootstrap();
