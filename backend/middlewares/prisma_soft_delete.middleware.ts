import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaSoftDeleteMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    throw new Error('Method not implemented.');
  }
  prisma = new PrismaClient({});
  /***********************************/
  /* SOFT DELETE MIDDLEWARE */
  /***********************************/
}
