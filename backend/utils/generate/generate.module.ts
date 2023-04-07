import { Module } from '@nestjs/common';
import { AutoNumberService } from './generate.service';

@Module({
  providers: [AutoNumberService],
  exports: [AutoNumberService],
})
export class GenerateModule {}
