var express = require('express');
var router = express.Router();
var controller = require('../controllers/staff.controller');
var validate = require('../validate/admin.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

//Account
router.get('/viewAccount', controller.viewAccount);

router.get('/deleteAccount/:id', controller.deleteAccount);

//Course Category
router.get('/viewCourseCategory', controller.viewCourseCategory);

router.get('/createCourseCategory', controller.getCreateCourseCategory);

router.post('/createCourseCategory',validate.postCreateCourseCategory, controller.postCreateCourseCategory);

router.get('/deleteCourseCategory/:id', controller.deleteCourseCategory);

//Course
router.get('/viewCourse', controller.viewCourse);

router.get('/createCourse', controller.getCreateCourse);

router.post('/createCourse',validate.postCreateCourse ,controller.postCreateCourse);

router.get('/deleteCourse/:id', controller.deleteCourse);

//Topic
router.get('/viewTopic', controller.viewTopic);

router.get('/createTopic', controller.createTopic);

router.post('/createTopic', controller.postCreateTopic),

router.get('/deleteTopic/:id', controller.deleteTopic);

router.get('/', controller.index);

module.exports = router;