import { Injectable } from '@nestjs/common';
import { CreateLibrarianDto } from './dto/create-librarian.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LibrarianService {
  constructor(private prismaService: PrismaService) {}

  create(createLibrarianDto: CreateLibrarianDto) {
    return this.prismaService.member.create({ data: createLibrarianDto });
  }
}
