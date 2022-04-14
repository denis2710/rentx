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

    execute({name, description}: IRequst) : void {

        const specificationAlreadyExists = this.specificationsRepository.findByName(name)

        if(specificationAlreadyExists){ 
            throw new Error(`Specification ${name} already exists`)
        }

        this.specificationsRepository.create({name, description})
    }
    
}

export {CreateSpecificationUseCase}