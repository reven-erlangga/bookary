import { PartialType } from '@nestjs/mapped-types';
import { CreateBookCategoryDto } from './create-book_category.dto';
import { IsInt, IsString } from 'class-validator';

export class FindAllBookCategoryDto extends PartialType(CreateBookCategoryDto) {
  @IsInt()
  public page: number;

  @IsInt()
  public take: number;
}
