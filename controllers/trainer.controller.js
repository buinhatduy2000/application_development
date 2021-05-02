var db = require("../db");
var shortid = require('shortid');

module.exports = {
    //Home Page================================================================
    index: function (req, res) {
        res.render('trainer/index');
    },
};