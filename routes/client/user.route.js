const router = require('express').Router();

const userController = require('../../controllers/client/user.controller');

router.get('/', userController.getUser);
router.post('/', userController.createUser);

router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.patch('/:id/verify', userController.verifyUser);

module.exports = router;
