import { Module } from '@nestjs/common';
import { GoogleAuthService } from './google_auth.service';
import { GoogleAuthController } from './google_auth.controller';

@Module({
  controllers: [GoogleAuthController],
  providers: [GoogleAuthService]
})
export class GoogleAuthModule {}
