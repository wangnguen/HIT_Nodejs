const router = require('express').Router();

const userController = require('../../controllers/client/user.controller');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

// router.delete('/:id', userController.deleteUser);

module.exports = router;
