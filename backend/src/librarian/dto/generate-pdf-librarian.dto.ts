import { PartialType } from '@nestjs/mapped-types';
import { CreateLibrarianDto } from './create-librarian.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { LibrarianStatus } from '@prisma/client';

export class GeneratePdfLibrarianDto extends PartialType(CreateLibrarianDto) {
  @IsEnum(LibrarianStatus)
  @IsOptional()
  public status: LibrarianStatus;
}
