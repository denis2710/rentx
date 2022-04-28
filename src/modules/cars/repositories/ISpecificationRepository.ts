import { Specification } from '../infra/typeorm/entites/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
  findByName(name: string): Promise<Specification>
}

export { ICreateSpecificationDTO, ISpecificationRepository }
