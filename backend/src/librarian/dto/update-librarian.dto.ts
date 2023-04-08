import { PartialType } from '@nestjs/mapped-types';
import { CreateLibrarianDto } from './create-librarian.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { LibrarianStatus } from '@prisma/client';

export class UpdateLibrarianDto extends PartialType(CreateLibrarianDto) {
  @IsString()
  @IsOptional()
  public address: string;

  @IsEnum(LibrarianStatus, { message: 'Please check your librarian status' })
  @IsOptional()
  public status: LibrarianStatus;
}
