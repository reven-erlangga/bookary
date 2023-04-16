import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MemberService } from './member.service';
import AutoNumberService from 'utils/generate/generate.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as moment from 'moment';
import { FormatResponseInterceptor } from 'common/interceptors/format-response.interceptor';
import { Prisma, User } from '@prisma/client';
import { UniqueConstraintFailedRequestException } from 'common/exceptions/unique-constraint-failed-request.exception';
import { ChangeStatusMemberDto } from './dto/change-status-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('members')
@UseInterceptors(FormatResponseInterceptor)
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
    private readonly autoNumberService: AutoNumberService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const memberNumber = 'ME-'
      .concat(this.autoNumberService.autoNumber(10, 1000))
      .concat(moment().format('YYYYMMDDhmmss'));
    createUserDto.member.memberNumber = memberNumber;

    return await this.memberService.create(createUserDto).catch((err) => {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new UniqueConstraintFailedRequestException(err.meta['target']);
        }
      }

      throw new HttpException({ message: err.message }, HttpStatus.BAD_REQUEST);
    });
  }

  @Patch('change-status/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async changeStatus(
    @Param('id') id: string,
    @Body() changeStatusMemberDto: ChangeStatusMemberDto,
  ): Promise<any> {
    return await this.memberService.changeStatus(id, changeStatusMemberDto);
  }
}
