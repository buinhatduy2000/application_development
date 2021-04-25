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
        req.body.id = shortid.generate();
        res.render('admin/createAccount');
    },

    postCreateAccount: function (req, res) {
        db.get('accounts').push(req.body).write();
        res.redirect('viewAccount');
    },
    deleteAccount: function(req, res){
        var id = req.params.id;
        db.get('account').remove({id : id}).write();
        res.redirect('/admin/viewAccount');
        console.log(id);
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
        req.body.id = shortid.generate();
        db.get('courseCategory').push(req.body).write();
        res.redirect('viewCourseCategory');
    },
    deleteCourseCategory: function(req, res){
        var id = req.params.id;
        db.get('courseCategory').remove({id : id}).write();
        res.redirect('/admin/viewCourseCategory');
        console.log(id);
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
        req.body.id = shortid.generate();
        db.get('Course').push(req.body).write();
        res.redirect('viewCourse');
    },
    deleteCourse: function(req, res){
        var id = req.params.id;
        db.get('Course').remove({id : id}).write();
        res.redirect('/admin/viewCourse');
        console.log(id);
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
        req.body.id = shortid.generate();
        db.get('topic').push(req.body).write();
        res.redirect('viewTopic');
    },
    deleteTopic: function(req, res){
        var id = req.params.id;
        db.get('topic').remove({id : id}).write();
        res.redirect('/admin/viewTopic');
        console.log(id);
    },

    //Home Page================================================================
    index: function (req, res) {
        res.render('admin/index');
    },
};