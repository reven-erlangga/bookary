import { Module } from '@nestjs/common';
import { LibrarianService } from './librarian.service';
import { LibrarianController } from './librarian.controller';
import AutoNumberService from 'utils/generate/generate.service';

@Module({
  controllers: [LibrarianController],
  providers: [LibrarianService, AutoNumberService],
})
export class LibrarianModule {}
