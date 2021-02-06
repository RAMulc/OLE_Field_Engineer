const router = require("express").Router();
const authController = require('../../controllers/authController');

router.route('/')
    .get(authController.findAll)
router.route('/signup')
    .post(authController.signup);
router.route('/signin')
    .post(authController.signin);
router.route('/tokenIsValid')
    .post(authController.tokenIsValid);
router.route('/:id')
    .get(authController.findById)

module.exports = router;