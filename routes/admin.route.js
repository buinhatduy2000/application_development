var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin.controller');
var validate = require('../validate/admin.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

//Account
router.get('/viewAccount', controller.viewAccount);

router.get('/createAccountAdmin', controller.getCreateAccountAdmin);

router.post('/createAccountAdmin', validate.postCreateAccountAdmin, controller.postCreateAccountAdmin);

router.get('/createAccountStaff', controller.getCreateAccountStaff);

router.post('/createAccountStaff', validate.postCreateAccountStaff, controller.postCreateAccountStaff);

router.get('/createAccountTrainer', controller.getCreateAccountTrainer);

router.post('/createAccountTrainer', validate.postCreateAccountTrainer, controller.postCreateAccountTrainer);

router.get('/createAccountTrainee', controller.getCreateAccountTrainee);

router.post('/createAccountTrainee', validate.postCreateAccountTrainee, controller.postCreateAccountTrainee);


router.get('/deleteAccount/:username', controller.deleteAccount);

router.get('/updateAccountAdmin/:username', controller.getUpdateAccountAdmin);

router.put('/updateAccountAdmin/:username', controller.putUpdateAccountAdmin);

router.get('/updateAccountStaff/:username', controller.getUpdateAccountStaff);

router.put('/updateAccountStaff/:username', controller.putUpdateAccountStaff);

router.get('/updateAccountTrainer/:username', controller.getUpdateAccountTrainer);

router.put('/updateAccountTrainer/:username', controller.putUpdateAccountTrainer);

router.get('/updateAccountTrainee/:username', controller.getUpdateAccountTrainee);

router.put('/updateAccountTrainee/:username', controller.putUpdateAccountTrainee);


//Course Category
router.get('/viewCourseCategory', controller.viewCourseCategory);

router.get('/createCourseCategory', controller.getCreateCourseCategory);

router.post('/createCourseCategory',validate.postCreateCourseCategory, controller.postCreateCourseCategory);

router.get('/deleteCourseCategory/:id', controller.deleteCourseCategory);

router.get('/updateCourseCategory/:id', controller.updateCourseCategory);

router.put('/updateCourseCategory/:id',validate.postCreateCourseCategory, controller.putUpdateCourseCategory);


//Course
router.get('/viewCourse/:category', controller.viewCourse);

router.get('/viewCourseDetail/:detail', controller.viewCourseDetail);

router.get('/createCourse/:category', controller.getCreateCourse);

router.post('/createCourse/:category',validate.postCreateCourse, controller.postCreateCourse);

router.get('/deleteCourse/:id', controller.deleteCourse);

router.get('/updateCourse/:id', controller.getUpdateCourse);

router.put('/updateCourse/:id',validate.postCreateCourse, controller.putUpdateCourse);

//Topic
router.get('/viewTopic/:course', controller.viewTopic);

router.get('/createTopic/:course', controller.getCreateTopic);

router.post('/createTopic/:course', controller.postCreateTopic),

router.get('/deleteTopic/:id', controller.deleteTopic);

router.get('/updateTopic/:id', controller.getUpdateTopic);

router.put('/updateTopic/:id', controller.putUpdateTopic);

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