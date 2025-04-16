const router = require('express').Router();
const authController = require('../../controllers/client/auth.controller');

router.get('/register', authController.register);
router.post('/register', authController.registerPost);
router.get('/login', authController.login);
router.post('/login', authController.loginPost);

module.exports = router;
