const express = require('express')
const router = express.Router()

const CategoryController = require('../Controllers/categoryController')

router.post('/add',  CategoryController.addCategory)
router.get('/getall', CategoryController.getAllCategory)
router.delete('/delete/:id',CategoryController.deleteCategory)

module.exports = router
