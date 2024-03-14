const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/UserController')

router.post('/add',UserController.addUser)
router.get('/getallusers',UserController.getAllUsers)
router.post('/login', UserController.loginUser)
router.get('/getuser/:id', UserController.getUser)
router.delete('/delete/:id', UserController.deleteUser)

module.exports = router