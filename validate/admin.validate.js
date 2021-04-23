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
        var error = [];
        if (!req.body.code) {
            error.push('Code of subject is required !')
        }
        if (!req.body.language) {
            error.push('Language of subject is required !')
        }
        if (req.body.trainer == 'Choose a trainer') {
            error.push('Code of subject is required !')
        }
        if (error.length) {
            var account = db.get('accounts').filter({ role: 'trainer'}).value();
            res.render('admin/createCourseCategory', {
                trainers: account,
                errors: error,
                values: req.body
            });
            return;
        }
        next();

    }
}