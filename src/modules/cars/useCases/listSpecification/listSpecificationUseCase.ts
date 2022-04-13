import { Specification } from "../../entites/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";

class ListSpecificationUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    execute(): Specification[] { 
        const all = this.specificationsRepository.list(); 
        
        return all;
    }
}

export { ListSpecificationUseCase }