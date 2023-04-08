import { Test, TestingModule } from '@nestjs/testing';
import { LibrarianService } from './librarian.service';

describe('LibrarianService', () => {
  let service: LibrarianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibrarianService],
    }).compile();

    service = module.get<LibrarianService>(LibrarianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
