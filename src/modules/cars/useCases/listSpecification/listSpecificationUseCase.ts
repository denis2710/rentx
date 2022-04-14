import { inject, injectable } from "tsyringe";
import { Specification } from "../../entites/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";

@injectable()
class ListSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: SpecificationsRepository
    ) {}

    execute(): Specification[] { 
        const all = this.specificationsRepository.list(); 
        
        return all;
    }
}

export { ListSpecificationUseCase }