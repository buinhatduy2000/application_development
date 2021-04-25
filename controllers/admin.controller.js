var db = require("../db");
var shortid = require('shortid');

module.exports = {
    //Account=============================================================
    viewAccount: function (req, res) {
        res.render('admin/viewAccount', {
            accounts: db.get('accounts').value()
        });
    },

    getCreateAccount: function (req, res) {
        res.render('admin/createAccount');
    },

    postCreateAccount: function (req, res) {
        db.get('accounts').push(req.body).write();
        res.redirect('viewAccount');
    },

    //Course Category======================================================
    viewCourseCategory: function (req, res) {
        var category = db.get('courseCategory').value();
        res.render('admin/viewCourseCategory', {
            categorys: category
        });
    },

    getCreateCourseCategory: function (req, res) {
        var account = db.get('accounts').filter({ role: 'trainer' }).value();
        res.render('admin/createCourseCategory', {
            trainers: account
        })
    },

    postCreateCourseCategory: function (req, res) {
        db.get('courseCategory').push(req.body).write();
        res.redirect('viewCourseCategory');
    },

    //Course================================================================

    viewCourse: function (req, res) {
        var course = db.get('Course').value();
        res.render('admin/viewCourse', {
            courses: course
        });
    },

    getCreateCourse: function (req, res) {
        var categorys = db.get('courseCategory').value();
        res.render('admin/createCourse', {
            categorys: categorys
        });
    },
    postCreateCourse: function (req, res) {
        db.get('Course').push(req.body).write();
        res.redirect('viewCourse');
    },

    //Topic==================================================================
    viewTopic: function (req, res) {
        var topic = db.get('topic').value();
        res.render('admin/viewTopic', {
            topics: topic
        });
    },
    createTopic: function (req, res) {
        res.render('admin/createTopic');
    },
    postCreateTopic: function (req, res) {
        db.get('topic').push(req.body).write();
        res.redirect('viewTopic');
    },

    //Home Page================================================================
    index: function (req, res) {
        res.render('admin/index');
    },
};