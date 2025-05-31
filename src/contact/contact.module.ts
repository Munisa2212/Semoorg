import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { MailModule } from 'src/mail/mail.module';

@Module({
  controllers: [ContactController],
  imports: [MailModule]
})
export class ContactModule {}
