var express = require('express');
var router = express.Router();
var controller = require('../controllers/trainee.controller');

router.get('/', controller.index);

module.exports = router;