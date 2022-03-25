const express = require('express')

const carController = require('../controllers/carController')
const roleMiddelware = require('../middlewares/roleMiddelware')

const router = express.Router()

router.route('/').post(roleMiddelware(["officer" , "admin"]), carController.crateCar)
router.route('/').get(carController.getAllCar)
router.route('/:slug').get(carController.getCar)
router.route('/buy').post(carController.buyCar)
router.route('/deletes').post(carController.deleteCar)


module.exports = router