import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { MailService } from 'src/mail/mail.service';
import { Member, User } from '@prisma/client';
import VerificationTokenPayload from './types/token.type';
import { JwtService } from '@nestjs/jwt';
import { ChangeStatusMemberDto } from './dto/change-status-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(
    private readonly jwtService: JwtService,
    private prismaService: PrismaService,
    private mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.prismaService.$transaction(async (prisma) => {
      return prisma.user.create({
        data: {
          ...createUserDto,
          member: {
            create: createUserDto.member,
          },
        },
        include: { member: true },
      });
    });

    await this.sendVerificationEmail(user);

    return user;
  }

  async checkUserExist(createUserDto: CreateUserDto): Promise<boolean> {
    const user = await this.prismaService.user.count({
      where: { email: createUserDto.email },
    });

    if (user > 0) {
      return true;
    }

    return false;
  }

  private sendVerificationEmail(user: User): Promise<void> {
    const payload: VerificationTokenPayload = { id: user.id };
    const token = this.jwtService.sign(payload, {
      secret: process.env.CONFIRMATION_MAIL_SECRET_KEY,
      expiresIn: process.env.CONFIRMATION_MAIL_SECRET_KEY_EXPIRATION,
    });

    return this.mailService.sendMemberRegistrationConfirmation(user, token);
  }

  async update(id: string, updateMemberDto: UpdateMemberDto): Promise<Member> {
    return await this.prismaService.member.update({
      data: updateMemberDto,
      where: { id },
    });
  }

  async changeStatus(
    id: string,
    changeStatusMember: ChangeStatusMemberDto,
  ): Promise<Member> {
    return await this.prismaService.member.update({
      data: changeStatusMember,
      where: { id },
    });
  }
}
