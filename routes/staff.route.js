var express = require('express');
var router = express.Router();
var controller = require('../controllers/staff.controller');
// var validate = require('../validate/user.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

router.get('/', controller.index);

module.exports = router;