import { inject, injectable } from 'tsyringe';
import { ICreateUserDto } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase { 

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){}

    async execute({name, email, password, driver_licence}: ICreateUserDto): Promise<void>{

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if(userAlreadyExists){ 
            throw new Error(`User ${email} already exists`)
        }

        await this.userRepository.create({
            name, 
            email, 
            password, 
            driver_licence
        })

    }
}

export { CreateUserUseCase }