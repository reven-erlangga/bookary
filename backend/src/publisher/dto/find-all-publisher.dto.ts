import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';
import { CreatePublisherDto } from './create-publisher.dto';

export class FindAllPublisherDto extends PartialType(CreatePublisherDto) {
  @IsInt()
  public page: number;

  @IsInt()
  public take: number;
}
