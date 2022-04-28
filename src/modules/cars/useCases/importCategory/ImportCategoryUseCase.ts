import { parse } from 'csv-parse'
import fs from 'fs'
import { inject, injectable } from 'tsyringe'

import { CategoriesRepository } from '../../infra/typeorm/repositories/CategoryRepository'
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase'

interface IImportCategory {
  name: string
  description: string
}
@injectable()
class ImportCategoryUseCase {
  private createCategoryUseCase: CreateCategoryUseCase

  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository
  ) {
    this.createCategoryUseCase = new CreateCategoryUseCase(
      this.categoriesRepository
    )
  }

  loadCagories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []

      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile
        .on('data', async (line: string[]) => {
          const [name, description] = line
          categories.push({ name, description })
        })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCagories(file)

    const categoriesPromises = categories.map((category) =>
      this.categoriesRepository.findByName(category.name)
    )

    const categoriesAlreadyCreated = await Promise.all(categoriesPromises)

    categories.map(({ name, description }) => {
      const existCategory = categoriesAlreadyCreated.some(
        (c) => c.name === name
      )

      if (!existCategory) {
        this.createCategoryUseCase.execute({ name, description })
      }

      return existCategory
    })
  }
}

export { ImportCategoryUseCase }
