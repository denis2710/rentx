import { Router } from 'express'

import { AuthenticateUserCotroller } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserCotroller'

const authenticateRoutes = Router()

const autenterController = new AuthenticateUserCotroller()

authenticateRoutes.post('/sessions', autenterController.handle)

export { authenticateRoutes }
