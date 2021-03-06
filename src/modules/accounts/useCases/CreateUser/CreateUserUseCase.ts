import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/errors/AppError'

import { ICreateUserDto } from '../../dtos/ICreateUserDTO'
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_licence,
  }: ICreateUserDto): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError(`User ${email} already exists`)
    }

    const passwordHash = await hash(password, 8)

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      driver_licence,
    })
  }
}

export { CreateUserUseCase }
