var db = require("../db");
var shortid = require('shortid');

module.exports = {
    index: function (req, res) {
        res.render('admin/index');
    },
    // get method 
    getCreateAccount: function (req, res) {
        res.render('admin/createAccount');
    },
    getCreateCourseCategory: function (req, res) {
        var account = db.get('accounts').filter({ role: 'trainer'}).value();
        res.render('admin/createCourseCategory',{
            trainers: account
        })
    },
    getCreateCourse: function (req, res) {
        var categorys = db.get('courseCategory').value();
        res.render('admin/createCourse',{
            categorys: categorys
        });
    },

    viewAccount: function (req, res) {
        res.render('admin/viewAccount', {
            accounts: db.get('accounts').value()
        });
    },
    viewCourseCategory: function (req, res) {
        var category = db.get('courseCategory').value();
        res.render('admin/viewCourseCategory',{
            categorys: category
        });
    },
    viewCourse: function (req, res) {
        var course = db.get('Course').value();
        res.render('admin/viewCourse',{
            courses: course
        });
    },
    // post method
    postCreateAccount: function (req, res) {
        db.get('accounts').push(req.body).write();
        res.redirect('viewAccount');
    },
    postCreateCourseCategory: function (req, res) {
        db.get('courseCategory').push(req.body).write();
        res.redirect('viewCourseCategory');
    },
    postCreateCourse: function (req, res) {
        db.get('Course').push(req.body).write();
        res.redirect('viewCourse');
    },
};