import { Test, TestingModule } from '@nestjs/testing';
import { LibrarianController } from './librarian.controller';
import { LibrarianService } from './librarian.service';

describe('LibrarianController', () => {
  let controller: LibrarianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibrarianController],
      providers: [LibrarianService],
    }).compile();

    controller = module.get<LibrarianController>(LibrarianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
