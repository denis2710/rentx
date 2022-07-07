import { inject, injectable } from 'tsyringe'

import { ICreateCarDto } from '@modules/cars/dtos/ICreateCarDTO'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'
import { AppError } from '@shared/errors/AppError'

// @injectable()
class CreateCarUseCase {
  constructor(
    // @inject('CarRepository')
    private repository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    avaliable = true,
    licence_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDto): Promise<void> {
    const carAlreadyExists = await this.repository.findCarByLicencePlate(
      licence_plate
    )

    if (carAlreadyExists) {
      throw new AppError('Car already exists', 400)
    }

    this.repository.create({
      name,
      description,
      daily_rate,
      avaliable,
      licence_plate,
      fine_amount,
      brand,
      category_id,
    })
  }
}

export { CreateCarUseCase }
