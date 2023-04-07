import { PartialType } from '@nestjs/mapped-types';
import { CreateBookCategoryDto } from './create-book_category.dto';
import { IsDate, IsOptional } from 'class-validator';

export class UpdateBookCategoryDto extends PartialType(CreateBookCategoryDto) {
  @IsDate()
  @IsOptional()
  public updatedAt: string = new Date().toISOString();
}
