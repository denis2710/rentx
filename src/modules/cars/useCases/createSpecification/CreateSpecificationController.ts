import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(private createSpecificationService: CreateSpecificationUseCase) {}

    handle(request: Request, response: Response) {
        const {name, description} = request.body;
    
        try {
            this.createSpecificationService.execute({name, description})
        } catch (error) {
            return response.status(404).json({message: error.message})
        }
    
        return response.status(201).send()

    }

    
}

export { CreateSpecificationController }