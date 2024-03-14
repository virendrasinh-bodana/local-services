const express = require('express')
const router = express.Router()

const AdminController = require('../Controllers/AdminController')

router.post('/add', AdminController.addAdmin)
router.post('/login', AdminController.loginAdmin)

module.exports = router