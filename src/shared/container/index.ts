import {container} from 'tsyringe'
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoryRepository'


container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository", CategoriesRepository
)