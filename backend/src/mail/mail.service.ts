import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMemberRegistrationConfirmation(user: User, token: string) {
    const url = `${process.env.APP_URL}/auth/email/validate?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Confirm your Email',
      template: './confirmation-mail', // `.hbs` extension is appended automatically
      context: {
        name: user.firstName,
        url,
      },
    });
  }
}
