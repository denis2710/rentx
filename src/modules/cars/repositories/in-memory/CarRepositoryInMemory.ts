import { ICreateCarDto } from '@modules/cars/dtos/ICreateCarDTO'
import { Car } from '@modules/cars/infra/typeorm/entites/Car'

import { ICarsRepository } from '../ICarsRepository'

class CarRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []

  create({
    name,
    description,
    daily_rate,
    avaliable,
    licence_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDto): void {
    const car = new Car()

    Object.assign(car, {
      name,
      description,
      daily_rate,
      avaliable,
      licence_plate,
      fine_amount,
      brand,
      category_id,
    })

    this.cars.push(car)
  }

  async findCarByLicencePlate(licence_plate: string): Promise<Car> {
    const car = this.cars.find((car) => car.licence_plate === licence_plate)
    return car
  }
}

export { CarRepositoryInMemory }
