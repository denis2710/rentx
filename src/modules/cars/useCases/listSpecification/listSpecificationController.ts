import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

    handle(_request: Request, response: Response){ 
        const all = this.listSpecificationUseCase.execute(); 
        return response.json(all)
    }
}

export { ListSpecificationController }