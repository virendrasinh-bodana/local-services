const express = require('express')
const router = express.Router()

const ServiceController = require('../Controllers/ServiceController')

router.post('/add', ServiceController.addService)
router.get('/getall', ServiceController.getAllService)
router.delete('/delete/:id', ServiceController.deleteService)
router.get('/search/:query',ServiceController.searchServices)
router.get('/searchWithCategory/:query',ServiceController.searchServicesByCategory)
router.get('/getservice/:id', ServiceController.getService)

module.exports = router