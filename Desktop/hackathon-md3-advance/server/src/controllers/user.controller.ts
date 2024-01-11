import express from 'express'
import UserService from '../services/user.service'



const userController = express.Router()
const userService = new UserService()


userController.get('/', userService.getUser)
userController.patch('/:id', userService.editUserById)
userController.post('/', userService.postNewUser)
userController.delete('/:id', userService.deleteUserById)

export default userController