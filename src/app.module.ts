import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './modules/page/page.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123123',
      database: 'ins_system_project',
      entities: [__dirname + '/modules/**/entities/*.entity.{ts,js}'],
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: true
    }),

    PageModule, PageModule],
      controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
