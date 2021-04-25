var db = require("../db");
var shortid = require('shortid');

module.exports = {
    //Account=============================================================
    viewAccount: function (req, res) {
        res.render('staff/viewAccount', {
            accounts: db.get('accounts').value()
        });
    },
    deleteAccount: function(req, res){
        var id = req.params.id;
        db.get('account').remove({id : id}).write();
        res.redirect('/staff/viewAccount');
        console.log(id);
    },

    //Course Category======================================================
    viewCourseCategory: function (req, res) {
        var category = db.get('courseCategory').value();
        res.render('staff/viewCourseCategory', {
            categorys: category
        });
    },

    getCreateCourseCategory: function (req, res) {
        var account = db.get('accounts').filter({ role: 'trainer' }).value();
        res.render('staff/createCourseCategory', {
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
        res.redirect('/staff/viewCourseCategory');
        console.log(id);
    },

    //Course================================================================

    viewCourse: function (req, res) {
        var course = db.get('Course').value();
        res.render('staff/viewCourse', {
            courses: course
        });
    },

    getCreateCourse: function (req, res) {
        var categorys = db.get('courseCategory').value();
        res.render('staff/createCourse', {
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
        res.redirect('/staff/viewCourse');
        console.log(id);
    },

    //Topic==================================================================
    viewTopic: function (req, res) {
        var topic = db.get('topic').value();
        res.render('staff/viewTopic', {
            topics: topic
        });
    },
    createTopic: function (req, res) {
        res.render('staff/createTopic');
    },
    postCreateTopic: function (req, res) {
        req.body.id = shortid.generate();
        db.get('topic').push(req.body).write();
        res.redirect('viewTopic');
    },
    deleteTopic: function(req, res){
        var id = req.params.id;
        db.get('topic').remove({id : id}).write();
        res.redirect('/staff/viewTopic');
        console.log(id);
    },

    //Home Page================================================================
    index: function (req, res) {
        res.render('staff/index');
    },
};