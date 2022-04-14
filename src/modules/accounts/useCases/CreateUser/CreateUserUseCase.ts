import { inject, injectable } from 'tsyringe';
import { ICreateUserDto } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase { 

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){}

    async execute({name, email, password, username, driver_licence}: ICreateUserDto): Promise<void>{

        const userAlreadyExists = await this.userRepository.findByUsername(username);

        if(userAlreadyExists){ 
            throw new Error(`User ${username} already exists`)
        }

        await this.userRepository.create({
            name, 
            email, 
            password, 
            username, 
            driver_licence
        })

    }
}

export { CreateUserUseCase }