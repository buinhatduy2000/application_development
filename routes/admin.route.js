var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin.controller');
var validate = require('../validate/admin.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

//Account
router.get('/viewAccount', controller.viewAccount);

router.get('/createAccount', controller.getCreateAccount);

router.post('/createAccount',validate.postCreateAccount ,controller.postCreateAccount);

//Course Category
router.get('/viewCourseCategory', controller.viewCourseCategory);

router.get('/createCourseCategory', controller.getCreateCourseCategory);

router.post('/createCourseCategory',validate.postCreateCourseCategory, controller.postCreateCourseCategory);

//Course
router.get('/viewCourse', controller.viewCourse);

router.get('/createCourse', controller.getCreateCourse);

router.post('/createCourse',validate.postCreateCourse ,controller.postCreateCourse);

//Topic
router.get('/viewTopic', controller.viewTopic);

router.get('/createTopic', controller.createTopic);

router.post('/createTopic', controller.postCreateTopic),


router.get('/', controller.index);

module.exports = router;