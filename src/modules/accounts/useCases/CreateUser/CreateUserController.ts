import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController { 

    async handle(request: Request, response: Response) {
        const createUserUseCase = container.resolve(CreateUserUseCase)

        const data = request.body;

        try {
            await createUserUseCase.exec(data)
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({message: error.message})
        }
    }

}

export { CreateUserController }