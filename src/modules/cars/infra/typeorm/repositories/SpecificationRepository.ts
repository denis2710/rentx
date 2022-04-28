import { Repository } from 'typeorm';
import { appDataSource } from '@shared/infra/typeorm';
import { Specification } from "../entites/Specification";

import { ICreateSpecificationDTO, ISpecificationRepository } from "../../../repositories/ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository{
    private repository: Repository<Specification>


    constructor(){ 
        this.repository = appDataSource.getRepository(Specification)
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
      const specification = this.repository.create({
        name,
        description
      })      

      await this.repository.save(specification)
    }

    async list() : Promise<Specification[]> { 
        const specifications = await this.repository.find()
        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
       const specification = await this.repository.findOneBy({ name })
       return specification;
    }

}

export { SpecificationsRepository }