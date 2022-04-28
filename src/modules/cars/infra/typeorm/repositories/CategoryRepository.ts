import { Repository } from 'typeorm'

import { appDataSource } from '@shared/infra/typeorm'

import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../../../repositories/ICategoryRepository'
import { Category } from '../entites/Category'

class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = appDataSource.getRepository(Category)
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOneBy({ name })
    return category
  }
}

export { CategoriesRepository }
