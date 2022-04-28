import { inject, injectable } from "tsyringe";
import { Specification } from "../../infra/typeorm/entites/Specification";
import { SpecificationsRepository } from "../../infra/typeorm/repositories/SpecificationRepository";

@injectable()
class ListSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: SpecificationsRepository
    ) {}

    async execute(): Promise<Specification[]> { 
        const all = await this.specificationsRepository.list()
        
        return all;
    }
}

export { ListSpecificationUseCase }