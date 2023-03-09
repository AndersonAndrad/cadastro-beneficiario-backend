import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Cadastro beneficiario')
    .setDescription('POC para registro de beneficiarios')
    .setVersion('0.1')
    .addTag('CadastroBeneficiario')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api-doc', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
