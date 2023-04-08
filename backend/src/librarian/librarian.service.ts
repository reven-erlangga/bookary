import { Injectable } from '@nestjs/common';
import { CreateLibrarianDto } from './dto/create-librarian.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Librarian } from '@prisma/client';
import { UpdateLibrarianDto } from './dto/update-librarian.dto';

@Injectable()
export class LibrarianService {
  constructor(private prismaService: PrismaService) {}

  create(createLibrarianDto: CreateLibrarianDto) {
    return this.prismaService.librarian.create({ data: createLibrarianDto });
  }

  findAll(page: number, take: number): Promise<Librarian[]> {
    return this.prismaService.librarian.findMany({
      skip: page,
      take,
    });
  }

  findOne(id: string) {
    return this.prismaService.librarian.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateLibrarianDto: UpdateLibrarianDto) {
    return this.prismaService.librarian.update({
      data: updateLibrarianDto,
      where: {
        id,
      },
    });
  }
}
