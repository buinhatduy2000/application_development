var db = require("../db");
var shortid = require('shortid');
module.exports = {
    postCreateAccount: function (req, res, next) {
        req.body.id = shortid.generate();

        var account = db.get('accounts').find({ username: req.body.username }).value();
        var error = [];
        if (!req.body.name) {
            error.push('Name is required!')
        }
        if (!req.body.username) {
            error.push('Username is required!')
        }
        if (account) {
            error.push('Tai khoan da ton tai')
        }
        if (!req.body.password) {
            error.push('Password is required!')
        }
        if (!req.body.role) {
            error.push('Role is required!')
        }
        if (error.length) {
            res.render('admin/createAccount', {
                errors: error,
                values: req.body
            });
            return;
        }
        next();
    },
    postCreateCourseCategory: function (req, res, next) {

        var category = db.get('courseCategory').find({ category: req.body.category }).value();
        var error = [];
        if (!req.body.category) {
            error.push('Category name is required!')
        }
        if (category) {
            error.push('Category nay da ton tai')
        }
        if (error.length) {
            res.render('admin/createCourseCategory', {
                errors: error,
                values: req.body
            });
            return;
        }
        next();
    },
    postCreateCourse: function (req, res, next) {
        var error = [];
        if (!req.body.courseName) {
            error.push('Name of Course is required !')
        }
        if (req.body.courseCategory == 'Choose a category') {
            error.push('Course Category is required !')
        }
        if (error.length) {
            var categorys = db.get('courseCategory').value();
            res.render('admin/createCourse', {
                categorys: categorys,
                errors: error,
                values: req.body
            });
            return;
        }
        next();

    }
}