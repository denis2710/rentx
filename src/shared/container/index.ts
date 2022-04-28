import { container } from 'tsyringe'

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoryRepository'
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationRepository'
import { ICategoryRepository } from '@modules/cars/repositories/ICategoryRepository'
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository'

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
