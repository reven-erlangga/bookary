import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { EmailService } from './email.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth/email')
export class EmailController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
  ) {}

  @Get('validate')
  validate(@Query() query) {
    const token = query.token;
    const payload = this.jwtService.verify(token, {
      secret: process.env.CONFIRMATION_MAIL_SECRET_KEY,
    });

    return this.emailService.validateUser(payload.id);
  }
}
