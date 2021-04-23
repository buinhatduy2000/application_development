var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate')
var authMiddleware = require('../middlewares/auth.middleware')

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getID);

router.post('/create',validate.postCreate, controller.postUser);

module.exports = router;