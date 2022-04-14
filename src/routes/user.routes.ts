import express from 'express'
import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController'

const userRoutes = express.Router()

const createUserController = new CreateUserController()

userRoutes.post('/', createUserController.handle )

export { userRoutes } 