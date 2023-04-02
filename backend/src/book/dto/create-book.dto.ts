import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto implements Prisma.BookCreateInput {
  @IsString()
  @IsNotEmpty({
    message: 'Please insert your code of book!',
  })
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

  @IsInt()
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
  @IsNotEmpty({
    message: 'Please insert your title of book!',
  })
  public imagePath: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert your title of book!',
  })
  public author: string;

  @IsInt()
  @IsNotEmpty({
    message: 'Please insert your title of book!',
  })
  public stock: number;

  @IsNotEmpty({
    message: 'Please insert your category book!',
  })
  public category: any;

  @IsNotEmpty({
    message: 'Please insert your publisher book!',
  })
  public publisher: any;
}
