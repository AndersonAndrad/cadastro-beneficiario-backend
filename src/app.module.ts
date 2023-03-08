import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TitularModule } from './app/titular/titular.module';

@Module({
  imports: [
    TitularModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', 'variaveis.ini'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
