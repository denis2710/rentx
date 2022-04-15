import { AppError } from './../erros/AppError';
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
        throw new AppError('Token missing', 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const {sub: user_id } = verify(token, "162b9895e3757521261df8c930613ce9") as IPayload;
        const usersRepository = container.resolve(UserRepository)
        const user = await usersRepository.findById(user_id)

        if(!user){ 
            throw new AppError('User not found', 401)
        }
        
        request.user = { 
            id: user_id
        }

    } catch (error) {
        throw new AppError('Invalid token', 401)
    }

    next()
}