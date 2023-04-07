import { Test, TestingModule } from '@nestjs/testing';
import { BookCategoryController } from './book_category.controller';
import { BookCategoryService } from './book_category.service';

describe('BookCategoryController', () => {
  let controller: BookCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookCategoryController],
      providers: [BookCategoryService],
    }).compile();

    controller = module.get<BookCategoryController>(BookCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
