import { MemberStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { CreateMemberDto } from './create-member.dto';
import { PartialType } from '@nestjs/mapped-types';

export class ChangeStatusMemberDto extends PartialType(CreateMemberDto) {
  @IsEnum(MemberStatus, { each: true })
  @IsNotEmpty({ message: 'Please insert member status' })
  public status?: MemberStatus;
}
