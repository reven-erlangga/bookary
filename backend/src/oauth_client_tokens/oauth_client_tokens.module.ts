import { Module } from '@nestjs/common';
import { OauthClientTokensService } from './oauth_client_tokens.service';
import { OauthClientTokensController } from './oauth_client_tokens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { OAuthClientToken } from './entities/oauth_client_token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OAuthClientToken, User])],
  controllers: [OauthClientTokensController],
  providers: [OauthClientTokensService],
})
export class OauthClientTokensModule {}
