import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { JwtPayload } from './jwt.strategy';

@Injectable()
export class EmailService {
  constructor(private readonly prismaService: PrismaService) {}

  async validateUser(id: string): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new HttpException('INVALID_TOKEN', HttpStatus.UNAUTHORIZED);
    }

    await this.prismaService.user.update({
      data: { isValidate: true },
      where: { id: user.id },
    });

    return user;
  }
}
