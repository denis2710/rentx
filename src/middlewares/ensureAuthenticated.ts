import { container } from 'tsyringe';
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from '../modules/accounts/repositories/implementations/UsersRepository';


interface IPayload {
    sub: string;
 }


export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){ 
    const authHeader = request.headers.authorization
    
    if(!authHeader){ 
        throw new Error('Token missing')
    }

    const [, token] = authHeader.split(" ")

    try {
        const {sub} = verify(token, "162b9895e3757521261df8c930613ce9") as IPayload;
        const usersRepository = container.resolve(UserRepository)
        const user = await usersRepository.findById(sub)

        if(!user){ 
            throw new Error('User not found')
        }
        
        Object.assign(response, {user})

    } catch (error) {
        throw new Error('Invalid token')
    }

    next()
}