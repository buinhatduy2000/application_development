
var db = require("../db");

module.exports = {
    login: function (req, res) {
        res.render('auth/login');
    },

    postLogin: function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        var account = db.get('accounts').find({ username: username }).value();

        if (!account) {
            res.render('auth/login', {
                errors: [
                    'Khong ton tai account nay'
                ],
                values: req.body
            });
            return;
        }

        if (account.password !== password) {
            res.render('auth/login', {
                errors: [
                    'Mat khau khong dung'
                ],
                values: req.body
            });
            return;
        }
        res.cookie('accountId', account.id);
        console.log(account.username)
        console.log(account.id)
        console.log(account.role)

        if (account.role == 'admin')
            res.redirect('/admin');
        if (account.role == 'manager')
            res.redirect('/staff');
        if (account.role == 'trainer')
            res.redirect('/trainer');
        if (account.role == 'trainee')
            res.redirect('/trainee');
    },

    logout: function (req, res) {
        var account = db.get('accounts').value();
        res.clearCookie('accountId');
        res.redirect("/auth/login")
    }
};