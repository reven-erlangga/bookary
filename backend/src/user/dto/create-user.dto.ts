import { Prisma } from '@prisma/client';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsString()
  @IsNotEmpty({
    message: 'Please insert your first name!',
  })
  public firstName: string;

  @IsString()
  public phoneNumber: string;

  @IsString()
  public lastName: string;

  @IsDate()
  public dateOfBirth: Date;
}
