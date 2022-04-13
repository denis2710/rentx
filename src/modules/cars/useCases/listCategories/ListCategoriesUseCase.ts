import { Category } from "../../entites/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository"

class ListCategoriesUseCase {
    constructor(private categoriesRepoistory: ICategoryRepository) {}

    async execute(): Promise<Category[]> {
        const all  = await this.categoriesRepoistory.list()
        return all;
    }
}

export { ListCategoriesUseCase }