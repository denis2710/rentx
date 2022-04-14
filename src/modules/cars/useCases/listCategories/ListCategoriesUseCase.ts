import { inject, injectable } from "tsyringe";
import { Category } from "../../entites/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository"

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepoistory")
        private categoriesRepoistory: ICategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        const all  = await this.categoriesRepoistory.list()
        return all;
    }
}

export { ListCategoriesUseCase }