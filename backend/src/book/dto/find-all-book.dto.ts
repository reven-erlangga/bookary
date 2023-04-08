import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsInt } from 'class-validator';

export class FindAllBookDto extends PartialType(CreateBookDto) {
  @IsInt()
  public page: number;

  @IsInt()
  public take: number;
}
