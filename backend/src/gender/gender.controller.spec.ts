import { Test, TestingModule } from '@nestjs/testing';
import { GenderController } from './gender.controller';
import { GenderService } from './gender.service';

describe('GenderController', () => {
  let controller: GenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenderController],
      providers: [GenderService],
    }).compile();

    controller = module.get<GenderController>(GenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
