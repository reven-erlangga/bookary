import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookCategoryService } from './book_category.service';
import { CreateBookCategoryDto } from './dto/create-book_category.dto';
import { UpdateBookCategoryDto } from './dto/update-book_category.dto';
import { FindAllBookCategoryDto } from './dto/find-all-book_category.dto';
import AutoNumberService from 'utils/generate/generate.service';

@Controller('book-categories')
export class BookCategoryController {
  constructor(
    private readonly bookCategoryService: BookCategoryService,
    private readonly autoNumberService: AutoNumberService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createBookCategoryDto: CreateBookCategoryDto) {
    const code = 'BC-'.concat(this.autoNumberService.autoNumber(10, 1000));
    createBookCategoryDto.code = code;

    return this.bookCategoryService.create(createBookCategoryDto);
  }

  @Get()
  findAll(@Query() query: FindAllBookCategoryDto) {
    let take = 10;
    let skip = 0;

    if (query.take != null) {
      take = +query.take;
    }

    if (query.page != null) {
      skip = (+query.page - 1) * take;
    }

    return this.bookCategoryService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookCategoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookCategoryDto: UpdateBookCategoryDto,
  ) {
    return this.bookCategoryService.update(id, updateBookCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookCategoryService.remove(id);
  }
}
