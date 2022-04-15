import { AppError } from './../../../../erros/AppError';
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { inject,  injectable } from 'tsyringe'

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase { 
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepoistory: ICategoryRepository
    ) {}

    async execute({name, description}: IRequest): Promise<void> { 
               
        const categoryAlreadyExists = await this.categoriesRepoistory.findByName(name);

        if(categoryAlreadyExists){ 
            throw new AppError(`Category ${name} already exists`)
        }
    
        this.categoriesRepoistory.create({
            name, 
            description, 
        })
    
    }
}

export { CreateCategoryUseCase };