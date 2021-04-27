var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin.controller');
var validate = require('../validate/admin.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

//Account
router.get('/viewAccount', controller.viewAccount);

router.get('/createAccount', controller.getCreateAccount);

router.post('/createAccount', validate.postCreateAccount ,controller.postCreateAccount);

router.get('/deleteAccount/:id', controller.deleteAccount);

router.get('/updateAccount/:id', controller.getUpdateAccount);

router.post('/updateAccount/:id', controller.postUpdateAccount);

//Course Category
router.get('/viewCourseCategory', controller.viewCourseCategory);

router.get('/createCourseCategory', controller.getCreateCourseCategory);

router.post('/createCourseCategory',validate.postCreateCourseCategory, controller.postCreateCourseCategory);

router.get('/deleteCourseCategory/:id', controller.deleteCourseCategory);

router.get('/updateCourseCategory/:id', controller.updateCourseCategory);

router.post('/updateCourseCategory/:id', controller.POSTupdateCourseCategory);

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

// Trainer to Course
router.get('/viewTrainer', controller.viewTrainerToCourse);

router.get('/addTrainerToCourse', controller.addTrainer);

router.post('/addTrainerToCourse', controller.postAddTrainer);

router.get('/deleteTrainer/:id', controller.deleteTrainer);

router.get('/', controller.index);

module.exports = router;