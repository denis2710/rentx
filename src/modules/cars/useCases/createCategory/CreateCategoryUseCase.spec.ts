import { AppError } from '@errors/AppError';
import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase
let categoryRepositoryInMemory: CategoryRepositoryInMemory;

describe('Create Category', () => {

    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
    })
    
    it('should be able to create a new Category', async () => {
        const category = {
            name: 'category name test',
            description: 'category description test'
        }

        await createCategoryUseCase.execute(category)

        const categoryCreated = await categoryRepositoryInMemory.findByName(category.name)

        expect(categoryCreated).toHaveProperty("id")

    })

    it('should not be able to create a new Category with name exists', async () => {
    
        expect(async () => {
            const category = {
                name: 'category name test',
                description: 'category description test'
            }
    
            await createCategoryUseCase.execute(category)
            await createCategoryUseCase.execute(category)

        }).rejects.toBeInstanceOf(AppError)
     

    })
})