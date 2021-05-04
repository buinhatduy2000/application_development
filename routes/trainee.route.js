var express = require('express');
var router = express.Router();
var controller = require('../controllers/trainee.controller');

router.get('/updateInformation/:id', controller.getUpdateInformation)

router.post('/updateInformation/:id', controller.postUpdateInformation)

//Topic
router.get('/viewTopic/:course', controller.viewTopic);

router.get('/', controller.index);

module.exports = router;