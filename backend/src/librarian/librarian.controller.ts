import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LibrarianService } from './librarian.service';
import AutoNumberService from 'utils/generate/generate.service';
import { CreateLibrarianDto } from './dto/create-librarian.dto';
import { FindAllLibrarianDto } from './dto/find-all-librarian.dto';

@Controller('librarians')
export class LibrarianController {
  constructor(
    private readonly librarianService: LibrarianService,
    private readonly autoNumberService: AutoNumberService,
  ) {}

  @Post()
  create(@Body() createLibrarianDto: CreateLibrarianDto) {
    const memberNumber = 'LB-'.concat(
      this.autoNumberService.autoNumber(0, 10000),
    );
    createLibrarianDto.librarianNumber = memberNumber;

    return this.librarianService.create(createLibrarianDto);
  }

  @Get()
  findAll(@Query() query: FindAllLibrarianDto) {
    let take = 10;
    let skip = 0;

    if (query.take != null) {
      take = +query.take;
    }

    if (query.page != null) {
      skip = (+query.page - 1) * take;
    }

    return this.librarianService.findAll(skip, take);
  }
}
