import express from 'express'

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListSpecificationController } from '@modules/cars/useCases/listSpecification/listSpecificationController'
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated'

const specificationRoutes = express.Router()

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()

specificationRoutes.use(ensureAuthenticated)

specificationRoutes.post('/', createSpecificationController.handle)

specificationRoutes.get('/', listSpecificationController.handle)

export { specificationRoutes }
