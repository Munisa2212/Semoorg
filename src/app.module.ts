import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [ContactModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
