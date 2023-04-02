import { Test, TestingModule } from '@nestjs/testing';
import { OauthClientTokensService } from './oauth_client_tokens.service';

describe('OauthClientTokensService', () => {
  let service: OauthClientTokensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthClientTokensService],
    }).compile();

    service = module.get<OauthClientTokensService>(OauthClientTokensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
