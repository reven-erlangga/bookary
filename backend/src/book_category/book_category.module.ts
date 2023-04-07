import { Module } from '@nestjs/common';
import { BookCategoryService } from './book_category.service';
import { BookCategoryController } from './book_category.controller';
import AutoNumberService from 'utils/generate/generate.service';

@Module({
  controllers: [BookCategoryController],
  providers: [BookCategoryService, AutoNumberService],
})
export class BookCategoryModule {}
