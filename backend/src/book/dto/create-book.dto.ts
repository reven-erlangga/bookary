import { Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateBookDto implements Prisma.BookCreateInput {
  @IsString()
  @IsNotEmpty({
    message: 'Please insert your code of book!',
  })
  @ValidateIf((o) => o.code)
  public code: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert your title of book!',
  })
  public title: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert your title of book!',
  })
  public isbn: string;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsNotEmpty({
    message: 'Please insert your year of book!',
  })
  public year: number;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert your title of book!',
  })
  public description: string;

  @IsString()
  @IsOptional()
  public imagePath: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert your title of book!',
  })
  public author: string;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsNotEmpty({
    message: 'Please insert your title of book!',
  })
  public stock: number;

  public category: any;
}
