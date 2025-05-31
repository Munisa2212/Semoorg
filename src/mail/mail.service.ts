import { BadRequestException, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Sayyidazamat@gmail.com',
      pass: 'simz glmv rrkp fprv',
    },
  });

  async sendMail(email: string, subject: string, message: string) {
    const htmlContent = `
    <div style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        padding: 30px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        color: #444;
    ">
        <h1 style="color: #2c3e50; margin-bottom: 15px;">You've Got a New Message!</h1>
        <p style="font-size: 16px; margin-bottom: 10px;">
        <strong>From:</strong> <a href="mailto:${email}" style="color: #2980b9; text-decoration: none;">${email}</a>
        </p>
        <p style="
        background: #f0f4f8;
        padding: 20px;
        border-radius: 8px;
        font-size: 15px;
        line-height: 1.5;
        color: #333;
        margin-bottom: 25px;
        white-space: pre-wrap;
        ">${message}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 20px;" />
        <footer style="font-size: 13px; color: #999; text-align: center;">
        This message was sent from your portfolio contact form.
        </footer>
    </div>
    `;

    const mailOptions = {
      from: 'Sayyidazamat@gmail.com',
      to: "Semoorg.building@gmail.com",
      subject: subject,
      html: htmlContent,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      throw new BadRequestException('Failed to send email. Check email address or credentials.');
    }
  }
}


