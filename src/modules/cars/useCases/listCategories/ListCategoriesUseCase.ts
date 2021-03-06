import { inject, injectable } from 'tsyringe'

import { Category } from '../../infra/typeorm/entites/Category'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepoistory: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const all = await this.categoriesRepoistory.list()
    return all
  }
}

export { ListCategoriesUseCase }
