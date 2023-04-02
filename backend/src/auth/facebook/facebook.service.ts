import { Injectable } from '@nestjs/common';

@Injectable()
export class FacebookService {
  async login(req) {
    if (!req.user) {
      return 'No user from fb';
    }

    const user = req.user;
    return user;
  }
}
