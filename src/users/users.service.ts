import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  password: string;
  role: 'user' | 'admin';
};

@Injectable()
export class UsersService {
  private readonly mocked_users: User[] = [
    {
      id: 1,
      username: 'dqnid',
      password: '1234',
      role: 'admin',
    },
  ];

  //TODO: password should be encrypted, maybe with bcrypt: https://github.com/kelektiv/node.bcrypt.js#readme

  async findOne(username: string): Promise<User | undefined> {
    return this.mocked_users.find((user) => user.username === username);
  }
}
