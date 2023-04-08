import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { Publisher } from '@prisma/client';
import { UpdatePublisherDto } from './dto/update-publisher.dto';

@Injectable()
export class PublisherService {
  constructor(private prismaService: PrismaService) {}

  create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    return this.prismaService.publisher.create({ data: createPublisherDto });
  }

  findAll(page: number, take: number): Promise<Publisher[]> {
    return this.prismaService.publisher.findMany({
      skip: page,
      take,
    });
  }

  findOne(id: string) {
    return this.prismaService.publisher.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updatePublisherDto: UpdatePublisherDto) {
    return this.prismaService.publisher.update({
      data: updatePublisherDto,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.publisher.delete({
      where: {
        id,
      },
    });
  }
}
