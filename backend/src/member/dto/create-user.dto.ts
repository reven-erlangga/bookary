import { Prisma } from '@prisma/client';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateMemberDto } from './create-member.dto';

export class CreateUserDto implements Prisma.UserCreateManyInput {
  @IsString()
  @IsNotEmpty({ message: 'Please insert your email account' })
  public email: string;

  @IsString()
  @IsNotEmpty({ message: 'Please insert your password' })
  public password: string;

  @IsString()
  @IsNotEmpty({ message: 'Please insert your first name' })
  public firstName: string;

  @IsString()
  @IsOptional()
  public lastName: string;

  @IsString()
  @IsOptional()
  public userId: string;

  @ValidateNested()
  @Type(() => CreateMemberDto)
  public member: CreateMemberDto;
}
