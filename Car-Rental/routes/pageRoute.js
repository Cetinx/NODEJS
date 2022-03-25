const express = require('express')
const pageController = require('../controllers/pageController')
const redirectMiddleware = require('../middlewares/redirectMiddleware')

const router = express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/services').get(pageController.getServicesPage)
// router.route('/car').get(pageController.getCarPage)
//router.route('/dashborad').get(pageController.getDashboradPage)
router.route('/contact').get(pageController.getContactPage)

router.route('/login').get(redirectMiddleware , pageController.getLoginPage)
router.route('/register').get(redirectMiddleware , pageController.getRegisterPage)

router.route('/carOne').get(pageController.getCarOnePage)


module.exports = router