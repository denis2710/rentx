import { inject, injectable } from 'tsyringe';
import { ICreateUserDto } from '../../dtos/ICreateUserDTO';
import { UserRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class CreateUserUseCase { 

    constructor(
        @inject("UserRepository")
        private userRepository: UserRepository
    ){}

    async exec(data: ICreateUserDto): Promise<void>{

        const userAlreadyExists = await this.userRepository.findByUsername(data.username)

        if(userAlreadyExists){ 
            throw new Error(`User ${data.username} already exists`)
        }

        await this.userRepository.create(data)

    }
}

export { CreateUserUseCase }