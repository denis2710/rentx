import { Router } from 'express';
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();


const upload = multer({
    dest: './tmp', 

})

const importCategoryController = new ImportCategoryController()
const createCategoryController = new CreateCategoryController()

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response)
})  

categoriesRoutes.get('/', async (_request, response) => {
    return listCategoriesController.handle(_request, response)
})

categoriesRoutes.post(
    '/import', 
    upload.single("file"), importCategoryController.handle
)

export  { categoriesRoutes }