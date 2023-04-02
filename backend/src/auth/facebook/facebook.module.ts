import { Module } from '@nestjs/common';
import { FacebookService } from './facebook.service';
import { FacebookController } from './facebook.controller';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  controllers: [FacebookController],
  providers: [FacebookService, FacebookStrategy],
})
export class FacebookModule {}
