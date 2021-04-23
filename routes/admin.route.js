var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin.controller');
var validate = require('../validate/admin.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

router.get('/', controller.index);

router.get('/createAccount', controller.getCreateAccount)

router.get('/viewAccount', controller.viewAccount);

router.get('/createCourseCategory', controller.getCreateCourseCategory);

router.get('/viewCourseCategory', controller.viewCourseCategory);

router.post('/createAccount',validate.postCreateAccount ,controller.postCreateAccount);

router.post('/createCourseCategory', controller.postCreateCourseCategory);

module.exports = router;