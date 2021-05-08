var Account = require("../models/account.model");
var Trainee = require("../models/trainee.model");
var TraineeToCourse = require("../models/traineeToCourse.model");
var Topic = require("../models/topic.model");

module.exports = {

    viewTopic: async function (req, res) {
        var course = req.params.course
        var topic = await Topic.find({courseName: course})
        res.render('trainee/viewTopic', {
            topics: topic
        });
    },

    getUpdateInformation: async function (req, res) {
        var username = req.params.username;
        var account = await Account.findOne({username: username});
        var trainee = await Trainee.findOne({username: username});
        res.render('trainee/updateInformation', {
            account: account,
            trainee: trainee
        })
    },

    postUpdateInformation: async function (req, res) {
        var username = req.params.username;

        await Account.updateOne({username: username}, req.body);
        await Trainee.updateOne({username: username}, req.body);
        res.redirect('/trainee')
    },

    //Home Page================================================================
    index: async function (req, res) {
        var account = await Account.findOne({'_id': req.cookies.accountId});
        var course = await TraineeToCourse.find({trainee: account.name});
        res.render('trainee/index', {
            courses: course
        });
    },
};