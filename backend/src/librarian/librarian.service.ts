import { Injectable } from '@nestjs/common';
import { CreateLibrarianDto } from './dto/create-librarian.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Librarian } from '@prisma/client';

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
}
