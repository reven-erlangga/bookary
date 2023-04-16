import { IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from './create-member.dto';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
  @IsString()
  @IsOptional()
  public biodata: string;

  @IsString()
  @IsOptional()
  public address: string;

  @IsString()
  @IsOptional()
  public hobby: string;
}
