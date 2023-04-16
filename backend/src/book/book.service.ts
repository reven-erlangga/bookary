import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from '@prisma/client';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return await this.prismaService.book.create({ data: createBookDto });
  }

  async findAll(page: number, take: number): Promise<Book[]> {
    return await this.prismaService.book.findMany({
      skip: page,
      take,
      include: {
        category: true,
      },
    });
  }

  async findOne(id: string): Promise<Book> {
    return await this.prismaService.book.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, UpdateBookDto: UpdateBookDto): Promise<Book> {
    return await this.prismaService.book.update({
      data: UpdateBookDto,
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<Book> {
    return await this.prismaService.book.delete({
      where: {
        id,
      },
    });
  }
}
