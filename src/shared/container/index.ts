import {container} from 'tsyringe'
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoryRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository'


container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository", 
    CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository", 
    SpecificationsRepository
)
