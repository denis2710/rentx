import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController { 

    async handle(request: Request, response: Response) {
        const createUserUseCase = container.resolve(CreateUserUseCase)

        const {name, email, password, username, driver_licence} = request.body;

        try {
            await createUserUseCase.execute({name, email, password, username, driver_licence})
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({message: error.message})
        }
    }

}

export { CreateUserController }