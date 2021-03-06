import { Category } from '../../infra/typeorm/entites/Category'
import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoryRepository'

class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = []

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((c) => c.name === name)
    return category
  }
  async list(): Promise<Category[]> {
    const all = this.categories
    return all
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category()
    Object.assign(category, {
      name,
      description,
    })

    this.categories.push(category)
  }
}

export { CategoryRepositoryInMemory }
