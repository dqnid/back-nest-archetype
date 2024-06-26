import { Injectable } from '@nestjs/common';
import { Role } from './roles/role.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

export type UserType = {
  id: number;
  username: string;
  password: string;
  roles: Role[];
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<UserType | undefined> {
    const db_user = await this.usersRepository.findOneBy({ username });
    if (!db_user) return null;
    //TODO: change this shabby mapping for a more adequate database structure
    const user: UserType = {
      id: db_user.id,
      username: db_user.username,
      password: db_user.password,
      roles: db_user.roles.split(';') as Role[],
    };
    console.log(user);
    return user;
  }

  // async create(
  //   username: string,
  //   password: string,
  //   roles: Role[],
  // ): Promise<User | undefined> {
  //   const roles_string = roles.join(';');
  //   const create_result = this.usersRepository.create(
  //     new User(username, password, roles_string),
  //   );
  // }
}
