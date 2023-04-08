import { Controller } from '@nestjs/common';
import { LibrarianService } from './librarian.service';

@Controller('librarian')
export class LibrarianController {
  constructor(private readonly librarianService: LibrarianService) {}
}
