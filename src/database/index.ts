import { DataSource } from "typeorm"
import { Category } from "../modules/cars/entites/Category"

const appDataSource = new DataSource({
  type: "postgres",
  host: "database_ignite",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [Category], 
  synchronize: true, 
  logging: false,

})

appDataSource.initialize()
  .then(() => {
    console.log("database initialized")
  })
  .catch((error) => console.log(error))

export { appDataSource }
