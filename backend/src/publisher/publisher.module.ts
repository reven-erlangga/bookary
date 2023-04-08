import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import AutoNumberService from 'utils/generate/generate.service';

@Module({
  controllers: [PublisherController],
  providers: [PublisherService, AutoNumberService],
})
export class PublisherModule {}
