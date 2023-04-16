import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenRequestException extends HttpException {
  constructor() {
    super('You are forbidden to access the endpoint', HttpStatus.BAD_REQUEST);
  }
}
