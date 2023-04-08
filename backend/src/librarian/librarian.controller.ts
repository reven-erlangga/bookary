import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { LibrarianService } from './librarian.service';
import AutoNumberService from 'utils/generate/generate.service';
import { CreateLibrarianDto } from './dto/create-librarian.dto';
import { FindAllLibrarianDto } from './dto/find-all-librarian.dto';
import { UpdateLibrarianDto } from './dto/update-librarian.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    const librarian = this.librarianService.findOne(id);

    if (!librarian) {
      throw new Error('Librarian not found');
    }

    return librarian;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLibrarianDto: UpdateLibrarianDto,
  ) {
    return this.librarianService.update(id, updateLibrarianDto);
  }
}
