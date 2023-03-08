import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Cadastro beneficiario')
    .setDescription('')
    .setVersion('0.1')
    .addTag('CadastroBeneficiario')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api-doc', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
