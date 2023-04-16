import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { JwtModule } from '@nestjs/jwt';
import { EmailController } from './email.controller';

@Module({
  imports: [JwtModule.register({})],
  providers: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
