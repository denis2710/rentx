import { AppError } from './../../../erros/AppError';
import { inject, injectable } from 'tsyringe';
import {compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken';
import { IUserRepository } from '../repositories/IUserRepository';

interface IRequest { 
    email: string;
    password: string;
}

interface IResponse { 
    user: {
        name: string;
        email: string;
    }, 
    token: string;
}

@injectable()
class AuthenticateUserUseCase { 
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){}

   async execute ({email, password}: IRequest): Promise<IResponse> {
       const user = await this.userRepository.findByEmail(email);

       if(!user){ 
        throw new AppError(`Email or password not invalid`, 401 )
    }

       const passwordMatch = await compare(password, user.password)

       if(!passwordMatch){
            throw new AppError(`Email or password not invalid`, 401)
       }

       const token = sign({},"162b9895e3757521261df8c930613ce9", {
           subject: user.id, 
           expiresIn: "1d"
       })

       const tokenReturn: IResponse = { 
        token,
        user: { 
            name: user.name,
            email: user.email
        }
     }

       return tokenReturn
       
   }

}

export { AuthenticateUserUseCase }