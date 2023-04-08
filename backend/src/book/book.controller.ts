import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from '@prisma/client';
import { UpdateBookDto } from './dto/update-book.dto';
import { FindAllBookDto } from './dto/find-all-book.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { BookCategoryService } from 'src/book_category/book_category.service';

@Controller('books')
export class BookController {
  constructor(
    private readonly bookService: BookService,
    private readonly bookCategoryService: BookCategoryService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.originalname}-${uniqueSuffix}.${ext}`;

          callback(null, filename);
        },
      }),
    }),
  )
  create(
    @Body() createBookDto: CreateBookDto,
    @Req() request: Request,
    @UploadedFile() file: Express.Multer.File,
  ) {
    createBookDto.imagePath = file.path;

    // Find book category
    const bookCategory = this.bookCategoryService.findOne(
      request.body['categoryId'],
    );

    createBookDto.category = bookCategory;

    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll(@Query() query: FindAllBookDto): Promise<Book[]> {
    let take = 10;
    let skip = 0;

    if (query.take != null) {
      take = +query.take;
    }

    if (query.page != null) {
      skip = (+query.page - 1) * take;
    }

    return this.bookService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    const book = this.bookService.findOne(id);

    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Book> {
    const user = this.bookService.findOne(id);

    if (!user) {
      throw new Error('User not found');
    }

    return this.bookService.remove(id);
  }
}
