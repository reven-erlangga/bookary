import { Controller, Get } from '@nestjs/common';
import { GoogleAuthService } from './google_auth.service';
import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';

@Controller('two-factor/google-auth')
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Get()
  generate() {
    const secret = speakeasy.generateSecret({
      name: 'Bookary (example)',
    });

    console.log(secret);

    return qrcode.toDataURL(secret.otpauth_url, function (err, data) {
      console.log(data);
    });
  }

  @Get('validate')
  validate() {
    const validate = speakeasy.totp.verify({
      secret: '$g.f/>??QyqhGZtrAqseT.@Eh5FShyT3',
      encoding: 'ascii',
      token: '132825',
    });

    console.log(validate);
  }
}
