import { Prisma } from '@prisma/client';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGenderDto implements Prisma.GenderCreateInput {
  @IsString()
  @IsNotEmpty({
    message: 'Please insert gender!',
  })
  public name: string;

  @IsString()
  @IsOptional()
  public description: string;
}
