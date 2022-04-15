import express from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecification/listSpecificationController';

const specificationRoutes = express.Router();

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()

specificationRoutes.use(ensureAuthenticated)

specificationRoutes.post('/', createSpecificationController.handle)

specificationRoutes.get('/', listSpecificationController.handle)

export {specificationRoutes}