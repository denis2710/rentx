import fs from 'fs'
import {parse} from 'csv-parse'
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase';
import { CategoriesRepository } from '../../repositories/implementations/CategoryRepository';
import { inject, injectable } from 'tsyringe';

interface IImportCategory{ 
    name: string; 
    description: string;
}
@injectable()
class ImportCategoryUseCase {
    private createCategoryUseCase: CreateCategoryUseCase; 

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository) {
        this.createCategoryUseCase = new CreateCategoryUseCase(this.categoriesRepository);
    }


    loadCagories(file: Express.Multer.File) : Promise<IImportCategory[]> { 
        return new Promise((resolve, reject) =>{
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] = [];
    
            const parseFile = parse();
    
            stream.pipe(parseFile)
    
             parseFile.on("data", async (line: string[]) => { 
                const [name, description] = line; 
                categories.push({name, description});
            }).on("end", ()=> {
              fs.promises.unlink(file.path)  
              resolve(categories)  
            }).on("error", (err)=> {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void>{ 
        const categories = await this.loadCagories(file);

        for(let category of categories){
            const {name, description} = category

            const existCategory = await this.categoriesRepository.findByName(name)

            if(!existCategory){
                this.createCategoryUseCase.execute({name, description})    
            }

        }

    }
}

export {ImportCategoryUseCase}