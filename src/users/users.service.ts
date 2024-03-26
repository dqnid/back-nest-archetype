import { Injectable } from '@nestjs/common';
import { Role } from './roles/role.enum';

export type User = {
  id: number;
  username: string;
  password: string;
  roles: Role[];
};

@Injectable()
export class UsersService {
  private readonly mocked_users: User[] = [
    {
      id: 1,
      username: 'dqnid',
      password: '1234',
      roles: [Role.Admin, Role.User],
    },
    {
      id: 2,
      username: 'albita',
      password: '1234',
      roles: [Role.User],
    },
  ];

  //TODO: password should be encrypted, maybe with bcrypt: https://github.com/kelektiv/node.bcrypt.js#readme

  async findOne(username: string): Promise<User | undefined> {
    return this.mocked_users.find((user) => user.username === username);
  }
}
