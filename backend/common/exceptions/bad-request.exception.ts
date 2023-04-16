import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
  constructor() {
    super('You are forbidden to access the endpoint', HttpStatus.FORBIDDEN);
  }
}
