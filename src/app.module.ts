import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './modules/register/register.module';
import { PageModule } from './modules/page/page.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [RegisterModule, PageModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
