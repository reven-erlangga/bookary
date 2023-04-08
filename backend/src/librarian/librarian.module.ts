import { Module } from '@nestjs/common';
import { LibrarianService } from './librarian.service';
import { LibrarianController } from './librarian.controller';

@Module({
  controllers: [LibrarianController],
  providers: [LibrarianService]
})
export class LibrarianModule {}
