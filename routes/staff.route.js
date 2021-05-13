var express = require('express');
var router = express.Router();
var controller = require('../controllers/staff.controller');
var validate = require('../validate/staff.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

//Account
router.get('/viewAccount', controller.viewAccount);

router.get('/createAccountTrainer', controller.getCreateAccountTrainer);

router.post('/createAccountTrainer', validate.postCreateAccountTrainer, controller.postCreateAccountTrainer);

router.get('/createAccountTrainee', controller.getCreateAccountTrainee);

router.post('/createAccountTrainee', validate.postCreateAccountTrainee, controller.postCreateAccountTrainee);

router.get('/updateInformation/:username', controller.getUpdateInformation)

router.post('/updateInformation/:username', controller.postUpdateInformation)


router.get('/deleteAccount/:username', controller.deleteAccount);

router.get('/updateAccountTrainer/:username', controller.getUpdateAccountTrainer);

router.post('/updateAccountTrainer/:username', controller.postUpdateAccountTrainer);

router.get('/updateAccountTrainee/:username', controller.getUpdateAccountTrainee);

router.post('/updateAccountTrainee/:username', controller.postUpdateAccountTrainee);


//Course Category
router.get('/viewCourseCategory', controller.viewCourseCategory);

router.get('/createCourseCategory', controller.getCreateCourseCategory);

router.post('/createCourseCategory',validate.postCreateCourseCategory, controller.postCreateCourseCategory);

router.get('/deleteCourseCategory/:id', controller.deleteCourseCategory);

router.get('/updateCourseCategory/:id', controller.updateCourseCategory);

router.post('/updateCourseCategory/:id',validate.postCreateCourseCategory, controller.POSTupdateCourseCategory);


//Course
router.get('/viewCourse/:category', controller.viewCourse);

router.get('/viewCourseDetail/:detail', controller.viewCourseDetail);

router.get('/createCourse/:category', controller.getCreateCourse);

router.post('/createCourse/:category',validate.postCreateCourse, controller.postCreateCourse);

router.get('/deleteCourse/:id', controller.deleteCourse);

router.get('/updateCourse/:id', controller.getUpdateCourse);

router.post('/updateCourse/:id',validate.postCreateCourse, controller.postUpdateCourse);

//Topic
router.get('/viewTopic/:course', controller.viewTopic);

router.get('/createTopic/:course', controller.getCreateTopic);

router.post('/createTopic/:course', controller.postCreateTopic),

router.get('/deleteTopic/:id', controller.deleteTopic);

router.get('/updateTopic/:id', controller.getUpdateTopic);

router.post('/updateTopic/:id', controller.postUpdateTopic);

// Trainer to Course
router.get('/viewTrainer', controller.viewTrainerToCourse);

router.get('/addTrainerToCourse', controller.addTrainer);

router.post('/addTrainerToCourse',validate.postAddTrainer, controller.postAddTrainer);

router.get('/deleteTrainer/:id', controller.deleteTrainer);

//Trainee to Course

router.get('/addTraineeToCourse', controller.addTrainee);

router.post('/addTraineeToCourse', controller.postAddTrainee);

router.get('/listTrainee/:course', controller.listTrainee);

router.get('/deleteTrainee/:id', controller.deleteTrainee);

router.get('/', controller.index);

module.exports = router;