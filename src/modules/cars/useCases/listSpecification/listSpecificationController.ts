import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

class ListSpecificationController {

    handle(_request: Request, response: Response){ 

        const listSpecificationUseCase = container.resolve(ListSpecificationUseCase);

        const all = listSpecificationUseCase.execute(); 

        return response.json(all);
    }
}

export { ListSpecificationController }