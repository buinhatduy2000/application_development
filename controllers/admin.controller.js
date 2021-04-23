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

    viewAccount: function (req, res) {
        res.render('admin/viewAccount', {
            accounts: db.get('accounts').value()
        });
    },
    viewCourseCategory: function (req, res) {
        var account = db.get('courseCategory').value();
        res.render('admin/viewCourseCategory',{
            accounts: account
        });
    },
    // post method
    postCreateAccount: function (req, res) {
        var username = req.body.username;
        req.body.id = shortid.generate();

        var account = db.get('accounts').find({ username: username }).value();
        if (account) {
            res.render('admin/createAccount', {
                errors: [
                    'Ten tai khoan nay da ton tai'
                ],
                values: req.body
            });
            return;
        }
        else if (!account) {
            db.get('accounts').push(req.body).write();
            res.redirect('viewAccount');
        }
    },
    postCreateCourseCategory: function (req, res) {
        db.get('courseCategory').push(req.body).write();
        res.redirect('viewCourseCategory');
    },
};