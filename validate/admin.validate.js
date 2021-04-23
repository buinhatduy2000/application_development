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
    }
}