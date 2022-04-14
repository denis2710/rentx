import { Router } from 'express';
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';

const categoriesRoutes = Router();


const upload = multer({
    dest: './tmp', 

})

const importCategoryController = new ImportCategoryController()
const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoryController()

categoriesRoutes.post('/', createCategoryController.handle)  

categoriesRoutes.get('/', listCategoriesController.handle)

categoriesRoutes.post(
    '/import', 
    upload.single("file"), 
    importCategoryController.handle
)

export  { categoriesRoutes }