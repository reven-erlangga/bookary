import { PartialType } from '@nestjs/mapped-types';
import { CreateLibrarianDto } from './create-librarian.dto';
import { IsString } from 'class-validator';

export class UpdateLibrarianDto extends PartialType(CreateLibrarianDto) {
  @IsString({
    message: 'Just string',
  })
  public address: string;

  @IsString()
  public status: string;
}
