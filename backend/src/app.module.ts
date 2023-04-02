import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ConfigModule } from '@nestjs/config';
import { GoogleModule } from './auth/google/google.module';
import { FacebookModule } from './auth/facebook/facebook.module';
import { OauthClientTokensModule } from './oauth_client_tokens/oauth_client_tokens.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PrismaModule,
    UsersModule,
    GoogleModule,
    FacebookModule,
    MemberModule,
    // OauthClientTokensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
