import { Controller } from '@nestjs/common';
import { OauthClientTokensService } from './oauth_client_tokens.service';

@Controller('oauth-client-tokens')
export class OauthClientTokensController {
  constructor(private readonly oauthClientTokensService: OauthClientTokensService) {}
}
