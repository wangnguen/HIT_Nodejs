const express = require("express");
const router = express.Router();
const jsonTestController = require("../controllers/jsonTestController");

router.get("/", jsonTestController.jsonTestPage);

module.exports = router;
