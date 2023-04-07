import { Prisma } from '@prisma/client';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AutoNumberService } from 'utils/generate/generate.service';

export class CreateBookCategoryDto implements Prisma.BookCategoryCreateInput {
  constructor(private readonly autoNumberService: AutoNumberService) {}

  @IsString()
  @IsOptional()
  public code: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert category name!',
  })
  public name: string;

  @IsString()
  public description: string;

  @IsDate()
  @IsOptional()
  public updatedAt: string = new Date().toISOString();
}
