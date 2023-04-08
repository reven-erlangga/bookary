import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { FindAllPublisherDto } from './dto/find-all-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import AutoNumberService from 'utils/generate/generate.service';

@Controller('publishers')
export class PublisherController {
  constructor(
    private readonly publisherService: PublisherService,
    private readonly autoNumberService: AutoNumberService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createPublisherDto: CreatePublisherDto) {
    const code = 'PU-'.concat(this.autoNumberService.autoNumber(10, 1000));
    createPublisherDto.code = code;

    return this.publisherService.create(createPublisherDto);
  }

  @Get()
  findAll(@Query() query: FindAllPublisherDto) {
    let take = 10;
    let skip = 0;

    if (query.take != null) {
      take = +query.take;
    }

    if (query.page != null) {
      skip = (+query.page - 1) * take;
    }

    return this.publisherService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const publisher = this.publisherService.findOne(id);

    if (!publisher) {
      throw new Error('Publisher not found');
    }

    return publisher;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ) {
    return this.publisherService.update(id, updatePublisherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const publisher = this.publisherService.findOne(id);

    if (!publisher) {
      throw new Error('Publisher not found');
    }

    return this.publisherService.remove(id);
  }
}
