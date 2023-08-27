import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) { }

  async create(
    createUserDto: CreateUserDto
  ) {
    return this.usersRepository.save(createUserDto);
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto)
  }

  async remove(id: number) {
    try {
      let user = await this.findOne(id);
      if (user) {
        return this.usersRepository.remove(user);
      } else {
        return new Error("user not found");
      }
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
}
