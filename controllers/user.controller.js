var db = require("../db");
var shortid = require('shortid');

module.exports = {
    index: function (req, res) {
        res.render('users/index', {
            users: db.get('users').value()
        });
    },

    search: function (req, res) {
        var q = req.query.q;
        var matchedUsers = db.get('users').value().filter(function (user) {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
        console.log(req.query);
        res.render('users/index', {
            users: matchedUsers,
            question: q
        });
    },

    create: function (req, res) {
        console.log(req.cookies);
        res.render('users/create');
    },

    getID: function (req, res) {
        var id = req.params.id;
        var users = db.get('users').find({ id: id }).value();
        res.render('users/view', {
            user: users
        });
    },

    postUser: function (req, res) {
        req.body.id = shortid.generate();
        db.get('users').push(req.body).write();
        res.redirect('/users');
    }
};