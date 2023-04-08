import { Body, Controller, Post } from '@nestjs/common';
import { LibrarianService } from './librarian.service';
import AutoNumberService from 'utils/generate/generate.service';
import { CreateLibrarianDto } from './dto/create-librarian.dto';

@Controller('librarians')
export class LibrarianController {
  constructor(
    private readonly librarianService: LibrarianService,
    private readonly autoNumberService: AutoNumberService,
  ) {}

  @Post()
  create(@Body() createLibrarianDto: CreateLibrarianDto) {
    const memberNumber = 'ME-'.concat(
      this.autoNumberService.autoNumber(0, 10000),
    );
    createLibrarianDto.memberNumber = memberNumber;

    return this.librarianService.create(createLibrarianDto);
  }
}
