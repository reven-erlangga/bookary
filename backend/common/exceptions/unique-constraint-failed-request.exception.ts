import { HttpException, HttpStatus } from '@nestjs/common';

export class UniqueConstraintFailedRequestException extends HttpException {
  constructor(target: any) {
    super(
      `There is a unique constraint ${target} violation`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
