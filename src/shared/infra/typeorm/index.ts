import { DataSource } from 'typeorm'

import { User } from '@modules/accounts/infra/typeorm/entities/User'
import { Category } from '@modules/cars/infra/typeorm/entites/Category'
import { Specification } from '@modules/cars/infra/typeorm/entites/Specification'

const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: true,
  logging: false,
  entities: [Category, Specification, User],
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
  subscribers: [],
})

appDataSource
  .initialize()
  .then(() => {
    console.log('database initialized')
  })
  .catch((error) => console.log(error))

export { appDataSource }
