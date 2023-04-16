import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import AutoNumberService from 'utils/generate/generate.service';
import { MailModule } from 'src/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [MailModule, JwtModule.register({})],
  controllers: [MemberController],
  providers: [MemberService, AutoNumberService],
})
export class MemberModule {}
