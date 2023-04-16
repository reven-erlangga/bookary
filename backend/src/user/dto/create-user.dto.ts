import { Prisma, Role } from '@prisma/client';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  id?: string;
  email: string;
  password?: string;
  middleName?: string;
  picture?: string;
  role?: Role;
  isValidate?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  oAuthTokens?: Prisma.OAuthTokenCreateNestedManyWithoutUserInput;
  twoFactorAuths?: Prisma.TwoFactorAuthCreateNestedManyWithoutUserInput;
  gender?: Prisma.GenderCreateNestedOneWithoutUserInput;
  member?: Prisma.MemberCreateNestedOneWithoutUserInput;
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
