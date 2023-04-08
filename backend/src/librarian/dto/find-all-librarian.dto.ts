import { PartialType } from '@nestjs/mapped-types';
import { CreateLibrarianDto } from './create-librarian.dto';
import { IsNumber } from 'class-validator';

export class FindAllLibrarianDto extends PartialType(CreateLibrarianDto) {
  @IsNumber()
  public page: number;

  @IsNumber()
  public take: number;
}
