import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLibrarianDto implements Prisma.LibrarianCreateInput {
  @IsString()
  @IsNotEmpty({
    message: 'Please insert librarian identity number',
  })
  public identityNumber: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert librarian address',
  })
  public address: string;
}
