var express = require('express');
var router = express.Router();
var controller = require('../controllers/trainer.controller');

router.get('/', controller.index);

module.exports = router;