import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookCategoryService } from 'src/book_category/book_category.service';

@Module({
  controllers: [BookController],
  providers: [BookService, BookCategoryService],
})
export class BookModule {}
