import { Specification } from "../../entites/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository{
    private specifications: Specification[]

    private static INSTANCE: SpecificationsRepository;

    constructor(){ 
        this.specifications = []
    }

    static getInstance(): SpecificationsRepository { 
      if(!SpecificationsRepository.INSTANCE){ 
        SpecificationsRepository.INSTANCE = new SpecificationsRepository()
      }

      return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
      const specification = new Specification()

      Object.assign(specification, { 
          name, 
          description, 
          created_at: new Date(),
        })

      this.specifications.push(specification)
    }

    list() : Specification[] { 
        return this.specifications;
    }

    findByName(name: string): Specification {
       const specification = this.specifications.find(s => s.name === name)
       return specification;
    }

}

export { SpecificationsRepository }