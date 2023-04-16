import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { MemberStatus, Prisma } from '@prisma/client';

export class CreateMemberDto implements Prisma.MemberCreateInput {
  status?: MemberStatus;
  user: Prisma.UserCreateNestedOneWithoutMemberInput;

  @IsString()
  @IsNotEmpty({
    message: 'Please insert identity number',
  })
  public identityNumber: string;

  @IsString()
  @IsOptional()
  public memberNumber: string;

  @IsString()
  @IsOptional()
  public topicTag: string;
}
