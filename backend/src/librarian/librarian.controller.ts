import { Body, Controller, Post } from '@nestjs/common';
import { LibrarianService } from './librarian.service';
import AutoNumberService from 'utils/generate/generate.service';

@Controller('librarians')
export class LibrarianController {
  constructor(
    private readonly librarianService: LibrarianService,
    private readonly autoNumberService: AutoNumberService,
  ) {}
}
