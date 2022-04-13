import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

class ListCategoryController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    async handle(_request: Request, response: Response){ 
        const all = await this.listCategoriesUseCase.execute();
        
        return response.status(200).json(all);
    }
}

export { ListCategoryController }