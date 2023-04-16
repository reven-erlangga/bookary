import { Injectable } from '@nestjs/common';
import { Gender } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';

@Injectable()
export class GenderService {
  constructor(private prismaService: PrismaService) {}

  async create(createGenderDto: CreateGenderDto): Promise<Gender> {
    return await this.prismaService.gender.create({ data: createGenderDto });
  }

  findAll(): Promise<Gender[]> {
    return this.prismaService.gender.findMany();
  }

  findOne(id): Promise<Gender> {
    return this.prismaService.gender.findFirst({
      where: { id },
    });
  }

  update(id: string, updateGenderDto: UpdateGenderDto) {
    return this.prismaService.gender.update({
      data: updateGenderDto,
      where: { id },
    });
  }
}
