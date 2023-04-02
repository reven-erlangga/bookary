import { Test, TestingModule } from '@nestjs/testing';
import { OauthClientTokensController } from './oauth_client_tokens.controller';
import { OauthClientTokensService } from './oauth_client_tokens.service';

describe('OauthClientTokensController', () => {
  let controller: OauthClientTokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OauthClientTokensController],
      providers: [OauthClientTokensService],
    }).compile();

    controller = module.get<OauthClientTokensController>(OauthClientTokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
