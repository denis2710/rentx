import { CategoriesRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoryController } from "./ListCategoryController";

const categoriesRepository = new CategoriesRepository();

const listcategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)

const listCategoriesController = new ListCategoryController(listcategoriesUseCase)

export { listCategoriesController }