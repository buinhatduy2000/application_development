var express = require('express');
var router = express.Router();
var controller = require('../controllers/trainee.controller');


//Course Category
router.get('/viewCourseCategory', controller.viewCourseCategory);

//Course
router.get('/viewCourse/:category', controller.viewCourse);

//Topic
router.get('/viewTopic/:course', controller.viewTopic);

router.get('/', controller.index);

module.exports = router;