import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserUseCase = container.resolve(CreateUserUseCase)

    const { name, email, password, driver_licence } = request.body

    await createUserUseCase.execute({ name, email, password, driver_licence })
    return response.status(201).send()
  }
}

export { CreateUserController }
