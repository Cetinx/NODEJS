const express = require('express')
const authController = require('../controllers/authController')
const aouthMiddleware = require('../middlewares/aouthMiddleware')

const router = express.Router()


router.route('/signup').post(authController.createUser)
router.route('/login').post(authController.loginUser)
router.route('/logout').get(authController.logoutUser)
router.route('/dashborad').get(aouthMiddleware , authController.getDashboradPage)


module.exports = router