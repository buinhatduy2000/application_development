var Account = require("../models/account.model");
var Trainer = require("../models/trainer.model");
var TraineeToCourse = require("../models/traineeToCourse.model");
var TrainerToCourse = require("../models/trainerToCourse.model");
var Topic = require("../models/topic.model");

module.exports = {
    viewTopic: async function (req, res) {
        var course = req.params.course
        var topic = await Topic.find({ courseName: course })
        res.render('trainer/viewTopic', {
            course: course,
            topics: topic
        });
    },

    getCreateTopic: function (req, res) {
        var course = req.params.course
        res.render('trainer/createTopic', {
            course: course
        });
    },
    postCreateTopic: function (req, res) {
        var courseName = req.body.courseName;
        const topic = new Topic(req.body);
        topic.save();
        res.redirect('/trainer/viewTopic/' + courseName);
    },

    deleteTopic: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await Topic.deleteOne(condition);
        res.redirect('/trainer');
    },

    getUpdateTopic: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        var topic = await Topic.findOne(condition)
        res.render('trainer/updateTopic', {
            topic: topic
        });
    },

    postUpdateTopic: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await Topic.updateOne(condition, req.body);
        res.redirect('/trainer');
    },

    listTrainee: async function (req, res) {
        var coursename = req.params.course;
        var view = await TraineeToCourse.find({ courseName: coursename });
        res.render('trainer/listTrainee', {
            views: view
            
        });
    },

    getUpdateInformation: async function (req, res) {
        var username = req.params.username;
        var account = await Account.findOne({username: username});
        var trainer = await Trainer.findOne({username: username});
        res.render('trainer/updateInformation', {
            account: account,
            trainer: trainer
        })
    },

    postUpdateInformation: async function (req, res) {
        var username = req.params.username;

        await Account.updateOne({username: username}, req.body);
        await Trainer.updateOne({username: username}, req.body);
        res.redirect('/trainer')
    },

    //Home Page================================================================
    index: async function (req, res) {
        var account = await Account.findOne({'_id': req.cookies.accountId});
        var view = await TrainerToCourse.find({trainer: account.name});
        res.render('trainer/index', {
            views: view
        });
        console.log(account)
    },
};