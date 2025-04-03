const router = require('express').Router();

const homeController = require('../../controllers/client/home.controller');

router.get('/', homeController.getHome);

module.exports = router;
