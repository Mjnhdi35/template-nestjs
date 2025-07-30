import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { hashPassword } from '../common/utils/bcrypt.utils'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto) {
    const { email, password, username } = body
    const hashedPassword = await hashPassword(password)
    const user = this.userRepository.create({
      password: hashedPassword,
      email,
      username,
    })
    return this.userRepository.save(user)
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } })
    if (!user) throw new NotFoundException(`User with id ${id} not found`)
    return user
  }

  async update(id: string, body: UpdateUserDto) {
    const user = await this.findOne(id)
    const updated = this.userRepository.merge(user, body)
    return this.userRepository.save(updated)
  }

  async remove(id: string) {
    const user = await this.findOne(id)
    await this.userRepository.remove(user)
  }
}
