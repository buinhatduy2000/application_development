const Account = require("../models/account.model");

module.exports = {
    login: function (req, res) {
        res.render('auth/login');
    },

    postLogin: async function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        var account = await Account.findOne({ username: username });

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
        res.cookie('accountRole', account.role);

        res.redirect('/' + account.role);
    },

    logout: async function (req, res) {
        var account = Account.find({});
        res.clearCookie('accountId');
        res.clearCookie('accountRole');
        res.redirect("/auth/login")
    }
};