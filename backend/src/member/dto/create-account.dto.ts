import { CreateUserDto } from './create-user.dto';
import { CreateMemberDto } from './create-member.dto';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAccountDto {
  @ValidateNested()
  @Type(() => CreateUserDto)
  public user: CreateUserDto;

  @ValidateNested()
  @Type(() => CreateMemberDto)
  public member: CreateMemberDto;
}
