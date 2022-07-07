import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'
import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'

import { CreateCarUseCase } from './CreateCarUseCase'

let carRepositoryInMemory: ICarsRepository
let createCarUseCase: CreateCarUseCase

const newCar = {
  name: 'new car',
  description: 'description of new car',
  daily_rate: 100,
  avaliable: true,
  licence_plate: 'abc-1234',
  fine_amount: 60,
  brand: 'brand',
  category_id: 'category',
}

describe('Create Car', () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory)
  })

  it('Should be possible registry a new Car', async () => {
    await createCarUseCase.execute(newCar)

    const carSaved = await carRepositoryInMemory.findCarByLicencePlate(
      newCar.licence_plate
    )

    expect(carSaved).toHaveProperty('id')
    expect(carSaved.licence_plate).toEqual(newCar.licence_plate)
  })

  it('Should not be possible registry a car with a car number allready existent.', async () => {
    await createCarUseCase.execute(newCar)
    await expect(async () => {
      await createCarUseCase.execute(newCar)
    }).rejects.toBeInstanceOf(AppError)
  })

  it('All cars should have the diponibility as true by default', async () => {
    const newCarChanged = { ...newCar }

    delete newCarChanged.avaliable

    await createCarUseCase.execute(newCarChanged)

    const carCreated = await carRepositoryInMemory.findCarByLicencePlate(
      newCar.licence_plate
    )

    expect(carCreated.avaliable).toEqual(true)
  })
  it.todo('Only admin user can registry a new car')
})
