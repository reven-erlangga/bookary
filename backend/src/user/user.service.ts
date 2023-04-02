import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.prismaService.user.create({ data: createUserDto });
  }

  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany({});
  }

  async findOne(id: string): Promise<User> {
    return await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.prismaService.user.update({
      data: updateUserDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: string): Promise<User> {
    return await this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
  }
}
