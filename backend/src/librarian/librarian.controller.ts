import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  StreamableFile,
} from '@nestjs/common';
import { LibrarianService } from './librarian.service';
import AutoNumberService from 'utils/generate/generate.service';
import { CreateLibrarianDto } from './dto/create-librarian.dto';
import { FindAllLibrarianDto } from './dto/find-all-librarian.dto';
import { UpdateLibrarianDto } from './dto/update-librarian.dto';
import * as fs from 'fs';
import * as PdfPrinter from 'pdfmake';
import { GeneratePdfLibrarianDto } from './dto/generate-pdf-librarian.dto';
import { join } from 'path';

@Controller('librarians')
export class LibrarianController {
  constructor(
    private readonly librarianService: LibrarianService,
    private readonly autoNumberService: AutoNumberService,
  ) {}

  @Post()
  create(@Body() createLibrarianDto: CreateLibrarianDto) {
    const memberNumber = 'LB-'.concat(
      this.autoNumberService.autoNumber(0, 10000),
    );
    createLibrarianDto.librarianNumber = memberNumber;

    return this.librarianService.create(createLibrarianDto);
  }

  @Get()
  findAll(@Query() query: FindAllLibrarianDto) {
    let take = 10;
    let skip = 0;

    if (query.take != null) {
      take = +query.take;
    }

    if (query.page != null) {
      skip = (+query.page - 1) * take;
    }

    return this.librarianService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const librarian = this.librarianService.findOne(id);

    if (!librarian) {
      throw new Error('Librarian not found');
    }

    return librarian;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLibrarianDto: UpdateLibrarianDto,
  ) {
    return this.librarianService.update(id, updateLibrarianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const librarian = this.librarianService.remove(id);

    if (!librarian) {
      throw new Error('Librarian not found');
    }

    return this.librarianService.remove(id);
  }

  @Get('export/pdf')
  async generatePdf(@Body() generatePdfLibrarianDto: GeneratePdfLibrarianDto) {
    const librarians = await this.librarianService.generatePdf(
      generatePdfLibrarianDto,
    );
    const fonts = {
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
      },
    };
    const printer = new PdfPrinter(fonts);
    const docDefinition = await this.docDefinitions(librarians);
    const fileName = 'PDF.pdf';
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    const file = fs.createWriteStream(fileName);

    pdfDoc.pipe(file);
    pdfDoc.end();

    const fileStream = fs.createReadStream(join(process.cwd(), fileName));

    return new StreamableFile(fileStream, { type: '.pdf' });
  }

  private extractValueLibrarians = (librarians: any) => {
    const body = [];

    const columnsTitle = this.mapTableTitleLibrarians();

    body.push(columnsTitle);

    for (let index = 0; index < librarians.length; index++) {
      const rows = [];
      const librarian = librarians[index];
      const registeredAt = new Date(librarian.createdAt).toLocaleDateString(
        'pt-BR',
      );

      rows.push(librarian.id);
      rows.push(librarian.identityNumber);
      rows.push(librarian.librarianNumber);
      rows.push(registeredAt);

      body.push(rows);
    }

    return body;
  };

  private mapTableTitleLibrarians = () => {
    const columnsTitle = [];

    const tableTitle: PdfPrinter.TableCell[] = [
      { text: 'Name', style: 'columnsTitle' },
      { text: 'Identity Number', style: 'columnsTitle' },
      { text: 'librarian Number', style: 'columnsTitle' },
      { text: 'Register At', style: 'columnsTitle' },
    ];

    tableTitle.forEach((column) => columnsTitle.push(column));

    return columnsTitle;
  };

  private docDefinitions = async (
    data: any,
  ): Promise<PdfPrinter.TDocumentDefinitions> => {
    const body = await this.extractValueLibrarians(data);

    return {
      defaultStyle: { font: 'Helvetica' },
      content: [
        {
          columns: [
            {
              text: 'Report List Librarian',
              style: 'header',
              alignment: 'left',
            },
            {
              text:
                'Created At : ' +
                new Date(Date.now()).toLocaleDateString('pt-BR'),
              alignment: 'right',
              bold: false,
              fontSize: 10,
            },
          ],
        },
        {
          table: {
            widths: ['auto', '*', 'auto', 80],
            heights: function () {
              return 30;
            },
            body,
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 30],
        },
        columnsTitle: {
          fontSize: 14,
          bold: true,
          fillColor: '#EEC03F',
          margin: [0, 10, 0, 0],
          alignment: 'center',
        },
      },
    };
  };
}
