import { Body, Controller, Post } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { MailService } from 'src/mail/mail.service';


@Controller('contact')
export class ContactController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async send(@Body() dto: CreateContactDto) {
    const subject = `New Message from ${dto.firstName || 'Anonymous'}`;
    const text = `
      Name: ${dto.firstName || ''} ${dto.lastName || ''}
      Email: ${dto.email}
      Message: ${dto.message}
    `;
    await this.mailService.sendMail(dto.email, subject, text);
    return {message: "You successfully sent message."}
  }
}

