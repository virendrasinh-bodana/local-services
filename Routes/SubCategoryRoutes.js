const express = require('express')
const router = express.Router()

const SubCategoryController = require("../Controllers/SubCategoryController")

router.post('/add', SubCategoryController.addSubCategory)
router.get('/getall',SubCategoryController.getAllSubCategory)
router.delete('/delete',SubCategoryController.deleteSubCategory)

module.exports = router