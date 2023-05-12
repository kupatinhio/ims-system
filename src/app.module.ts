import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './modules/register/register.module';
import { PageModule } from './modules/page/page.module';

@Module({
  imports: [RegisterModule, PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
