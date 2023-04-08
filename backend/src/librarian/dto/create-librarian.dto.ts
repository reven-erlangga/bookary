import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLibrarianDto implements Prisma.LibrarianCreateInput {
  @IsString()
  @IsNotEmpty({
    message: 'Please insert librarian identity number',
  })
  public identityNumber: string;

  @IsString()
  @IsOptional()
  public memberNumber: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert librarian address',
  })
  public address: string;
}
