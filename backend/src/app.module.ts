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
import { BookModule } from './book/book.module';
import { BookCategoryModule } from './book_category/book_category.module';
import { GenerateModule } from 'utils/generate/generate.module';
import { MulterModule } from '@nestjs/platform-express';
import { PublisherModule } from './publisher/publisher.module';
import { LibrarianModule } from './librarian/librarian.module';
import { QrcodeService } from './qrcode/qrcode.service';
import { GoogleAuthModule } from './auth/two_factor_auth/google_auth/google_auth.module';
import { GenderModule } from './gender/gender.module';
import { MailModule } from './mail/mail.module';
import { EmailModule } from './auth/email/email.module';

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
    MulterModule.register({ dest: './uploads' }),
    PrismaModule,
    GenerateModule,
    UsersModule,
    GoogleModule,
    FacebookModule,
    MemberModule,
    BookModule,
    BookCategoryModule,
    PublisherModule,
    LibrarianModule,
    GoogleAuthModule,
    GenderModule,
    MailModule,
    EmailModule,
    // OauthClientTokensModule,
  ],
  controllers: [AppController],
  providers: [AppService, QrcodeService],
})
export class AppModule {}
