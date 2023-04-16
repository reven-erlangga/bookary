import { Injectable } from '@nestjs/common';
import { CreateBookCategoryDto } from './dto/create-book_category.dto';
import { UpdateBookCategoryDto } from './dto/update-book_category.dto';
import { BookCategory } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookCategoryService {
  constructor(private prismaService: PrismaService) {}

  create(data: CreateBookCategoryDto) {
    return this.prismaService.bookCategory.create({ data });
  }

  async findAll(page: number, take: number): Promise<BookCategory[]> {
    return await this.prismaService.bookCategory.findMany({
      skip: page,
      take,
    });
  }

  async findOne(id: string): Promise<BookCategory> {
    return await this.prismaService.bookCategory.findFirst({
      where: { id },
    });
  }

  update(id: string, updateBookCategoryDto: UpdateBookCategoryDto) {
    return this.prismaService.bookCategory.update({
      data: updateBookCategoryDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaService.bookCategory.delete({
      where: { id },
    });
  }
}
