import { AppError } from './../../../../erros/AppError';
import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequst {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {

    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationRepository
    ){}

    async execute({name, description}: IRequst) : Promise<void> {

        const specificationAlreadyExists = await this.specificationsRepository.findByName(name)

        if(specificationAlreadyExists){ 
            throw new AppError(`Specification ${name} already exists`)
        }

        await this.specificationsRepository.create({name, description})
    }
    
}

export {CreateSpecificationUseCase}