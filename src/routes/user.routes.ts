import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController'
import { UpdateUserAvatarContoller } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarConroller'

const userRoutes = Router()



const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController()
const updateUserAvatarContoller = new UpdateUserAvatarContoller()

userRoutes.post('/', createUserController.handle)

userRoutes.patch(
    '/avatar',
    [ensureAuthenticated, uploadAvatar.single("avatar")],
    updateUserAvatarContoller.handle
    )

export { userRoutes } 