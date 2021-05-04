var Account = require("../models/account.model");
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
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        var account = await Account.findOne(condition)
        res.render('trainee/updateInformation', {
            account: account
        })
    },

    postUpdateInformation: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };

        await Account.updateOne(condition, req.body);
        res.redirect('/trainee')
    },

    //Home Page================================================================
    index: async function (req, res) {
        var account = await Account.findOne({'_id': req.cookies.accountId});
        var course = await TraineeToCourse.find({trainee: account.name});
        res.render('trainee/index', {
            account: account,
            courses: course
        });
    },
};