import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoryController {
  async handle(_request: Request, response: Response) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)

    const all = await listCategoriesUseCase.execute()

    return response.status(200).json(all)
  }
}

export { ListCategoryController }
