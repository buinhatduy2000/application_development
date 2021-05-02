var express = require('express');
var router = express.Router();
var controller = require('../controllers/staff.controller');
var validate = require('../validate/admin.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

//Account
router.get('/viewAccount', controller.viewAccount);

router.get('/deleteAccount/:id', controller.deleteAccount);

router.get('/updateAccount/:id', controller.getUpdateAccount);

router.post('/updateAccount/:id', controller.postUpdateAccount);

//Course Category
router.get('/viewCourseCategory', controller.viewCourseCategory);

router.get('/createCourseCategory', controller.getCreateCourseCategory);

router.post('/createCourseCategory',validate.postCreateCourseCategory, controller.postCreateCourseCategory);

router.get('/deleteCourseCategory/:id', controller.deleteCourseCategory);

router.get('/updateCourseCategory/:id', controller.updateCourseCategory);

router.post('/updateCourseCategory/:id',validate.postCreateCourseCategory, controller.POSTupdateCourseCategory);

//Course
router.get('/viewCourse/:category', controller.viewCourse);

router.get('/createCourse/:category', controller.getCreateCourse);

router.post('/createCourse/:category',validate.postCreateCourse, controller.postCreateCourse);

router.get('/deleteCourse/:id', controller.deleteCourse);

router.get('/updateCourse/:id', controller.getUpdateCourse);

router.post('/updateCourse/:id',validate.postCreateCourse, controller.postUpdateCourse);

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

//Trainee to Course
router.get('/viewTrainee', controller.viewTraineeToCourse);

router.get('/addTraineeToCourse', controller.addTrainee);

router.post('/addTraineeToCourse', controller.postAddTrainee);

router.get('/deleteTrainee/:id', controller.deleteTrainee);

router.get('/', controller.index);

module.exports = router;