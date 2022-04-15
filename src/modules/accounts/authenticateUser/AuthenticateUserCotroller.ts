import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserCotroller { 



    async handle(request: Request, response: Response) : Promise<Response> { 

        const autenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

        const {email, password} = request.body;

        try {
            const token = await autenticateUserUseCase.execute({email, password})
            return response.status(200).json(token)
        } catch (error) {
            let errorCode = 500; 

            if(error.message.indexOf('invalid')){ 
                errorCode = 401
            }

            return response.status(errorCode).json({error: error.message})


        }


    }

}

export { AuthenticateUserCotroller }