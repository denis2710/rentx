import express from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationRoutes = express.Router();


specificationRoutes.post('/', (request, response) => { 
    return createSpecificationController.handle(request, response)
})

specificationRoutes.get('/', (request, response) => {
  return listSpecificationController.handle(request, response)
})

export {specificationRoutes}