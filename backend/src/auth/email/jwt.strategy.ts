// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { EmailService } from './email.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly emailService: EmailService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: true,
//       secretOrKey: process.env.CONFIRMATION_MAIL_SECRET_KEY,
//     });
//   }

//   async validate(payload: JwtPayload): Promise<any> {
//     const user = await this.emailService.validateUser(payload);
//     if (!user) {
//       throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
//     }
//     return user;
//   }
// }

// export interface JwtPayload {
//   token: string;
// }
