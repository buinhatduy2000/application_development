var express = require('express');
var router = express.Router();
var controller = require('../controllers/trainee.controller');

router.get('/updateInformation/:username', controller.getUpdateInformation)

router.post('/updateInformation/:username', controller.postUpdateInformation)

//Topic
router.get('/viewTopic/:course', controller.viewTopic);

router.get('/', controller.index);

module.exports = router;