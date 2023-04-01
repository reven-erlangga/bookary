import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GoogleService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    const user = req.user;
    const newUser = await this.usersRepository.create({
      firstName: user['firstName'],
      lastName: user['lastName'],
      picture: user['picture'],
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }
}
