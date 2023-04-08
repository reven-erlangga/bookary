import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePublisherDto implements Prisma.PublisherCreateInput {
  @IsString()
  @IsOptional()
  public code: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert your name of publisher!',
  })
  public name: string;

  @IsString()
  @IsOptional()
  public description: string;
}
