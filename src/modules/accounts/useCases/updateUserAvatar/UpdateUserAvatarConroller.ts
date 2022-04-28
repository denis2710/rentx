import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

class UpdateUserAvatarContoller {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

    const { id } = request.user
    const avatar_file: string = request.file.filename

    await updateUserAvatarUseCase.execute({
      user_id: id,
      avatar_file,
    })

    return response.status(204).send()
  }
}

export { UpdateUserAvatarContoller }
