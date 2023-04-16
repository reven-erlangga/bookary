import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GoogleService {
  constructor(private prismaService: PrismaService) {}

  async login(req) {
    if (!req.user) {
      return 'No user from google';
    }

    const user = req.user;
    const searchUser = await await this.prismaService.user.findFirst({
      where: {
        email: user['email'],
      },
    });

    /**
     * Check user exist
     *
     * Check user exist by email and update profile if exist
     */
    if (searchUser) {
    }

    /**
     * Create a new user
     *
     * Create a new user if user not exist
     */
    // const newUser = await this.prismaService.user.create({
    //   data: {
    //     firstName: user['firstName'],
    //     lastName: user['lastName'],
    //     picture: user['picture'],
    //   },
    // });

    // return newUser;
  }
}
