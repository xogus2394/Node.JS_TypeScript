import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './createUser.dto';

import { User } from './user.entity';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private USER_REPOSITORY : Repository<User>
    ) {}

    async create(users: CreateUserDto): Promise<User> {
        return await this.USER_REPOSITORY.save(users);
    }

    findById(id: number): Promise<User> {
        return this.USER_REPOSITORY.findOneBy({id});
    } 

    findUsers(): Promise<User[]> {
        return this.USER_REPOSITORY.find();
      }
}






