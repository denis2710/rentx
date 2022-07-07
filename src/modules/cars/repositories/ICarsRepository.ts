import { ICreateCarDto } from '../dtos/ICreateCarDTO'
import { Car } from '../infra/typeorm/entites/Car'

interface ICarsRepository {
  create({
    name,
    description,
    daily_rate,
    avaliable,
    licence_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDto): void

  findCarByLicencePlate(licence_plate: string): Promise<Car>
}

export { ICarsRepository }
