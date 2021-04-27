var db = require("../db");
var shortid = require('shortid');

module.exports = {
    //Account=============================================================
    viewAccount: function (req, res) {
        res.render('admin/viewAccount', {
            accounts: db.get('accounts').cloneDeep().value()
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

    deleteAccount: function (req, res) {
        var id = req.params.id;
        db.get('accounts').remove({ id: id }).write();
        res.redirect('/admin/viewAccount');
        console.log(id);
    },

    getUpdateAccount: function (req, res) {
        var id = req.params.id;
        res.render('admin/updateAccount', {
            accounts: db.get('accounts').find({ id: id }).value()
        });
    },

    postUpdateAccount: function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var username = req.body.username;
        var password = req.body.password;
        var role = req.body.role;
        db.get('accounts').find({ id: id }).assign({ name: name}).write();
        db.get('accounts').find({ id: id }).assign({ username: username}).write();
        db.get('accounts').find({ id: id }).assign({ password: password}).write();
        db.get('accounts').find({ id: id }).assign({ role: role}).write();
        res.redirect('/admin/viewAccount');
        console.log(id, name, username, password, role);

    },


    //Course Category======================================================
    viewCourseCategory: function (req, res) {
        var category = db.get('courseCategory').cloneDeep().value();
        res.render('admin/viewCourseCategory', {
            categorys: category
        });
    },

    getCreateCourseCategory: function (req, res) {
        var account = db.get('accounts').filter({ role: 'trainer' }).cloneDeep().value();
        res.render('admin/createCourseCategory', {
            trainers: account
        })
    },

    postCreateCourseCategory: function (req, res) {
        req.body.id = shortid.generate();
        db.get('courseCategory').push(req.body).write();
        res.redirect('viewCourseCategory');
    },
    deleteCourseCategory: function (req, res) {
        var id = req.params.id;
        db.get('courseCategory').remove({ id: id }).write();
        res.redirect('/admin/viewCourseCategory');
        console.log(id);
    },
    updateCourseCategory: function (req, res) {
        var id = req.params.id;
        var courseCategory = db.get('courseCategory').find({ id: id }).value();
        res.render('admin/updateCourseCategory', {
            courseCategorys: courseCategory
        });
    },
    POSTupdateCourseCategory: function (req, res) {
        var id = req.params.id;
        var category = req.body.category;
        db.get('courseCategory').find({ id: id }).assign({ category: category }).write();
        res.redirect('/admin/viewCourseCategory');
    },

    //Course================================================================

    viewCourse: function (req, res) {
        var category = req.params.category;
        var course = db.get('Course').filter({courseCategory: category}).value();
        res.render('admin/viewCourse', {
            courses: course,
            category: category
        });
    },

    getCreateCourse: function (req, res) {
        var category = req.params.category;
        res.render('admin/createCourse', {
            category: category
        });
    },
    postCreateCourse: function (req, res) {
        req.body.id = shortid.generate();
        var category = req.body.courseCategory;
        db.get('Course').push(req.body).write();
        res.redirect('/admin/viewCourse/' + category);
        console.log(category)
    },

    deleteCourse: function (req, res) {
        var id = req.params.id;
        var category = req.body.courseCategory;
        db.get('Course').remove({ id: id }).write();
        res.redirect('/admin/viewCourseCategory');
        console.log(category);
    },

    getUpdateCourse: function (req, res) {
        var id = req.params.id;
        var course = db.get('Course').find({ id: id }).value();
        res.render('admin/updateCourse', {
            course: course
        });
    },
    postUpdateCourse: function (req, res) {
        var id = req.params.id;
        var courseName = req.body.courseName;
        db.get('Course').find({ id: id }).assign({ courseName: courseName }).write();
        res.redirect('/admin/viewCourse/' + req.body.courseCategory);
        console.log(req.body.courseCategory);
    },

    //Topic==================================================================
    viewTopic: function (req, res) {
        var topic = db.get('topic').cloneDeep().value();
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
    deleteTopic: function (req, res) {
        var id = req.params.id;
        db.get('topic').remove({ id: id }).write();
        res.redirect('/admin/viewTopic');
        console.log(id);
    },

    // Assign trainer to Course
    viewTrainerToCourse: function (req, res) {
        var viewTrainer = db.get('trainerToCourse').cloneDeep().value();
        res.render('admin/viewTrainer', {
            viewTrainers: viewTrainer
        });
    },

    addTrainer: function (req, res) {
        var course = db.get('Course').value();
        var trainer = db.get('accounts').filter({ role: 'trainer' }).cloneDeep().value();
        res.render('admin/trainerCourse', {
            courses: course, trainers: trainer
        });
    },
    postAddTrainer: function (req, res) {
        req.body.id = shortid.generate();
        db.get('trainerToCourse').push(req.body).write();
        res.redirect('viewTrainer');
    },
    deleteTrainer: function (req, res) {
        var id = req.params.id;
        db.get('trainerToCourse').remove({ id: id }).write();
        res.redirect('/admin/viewTrainer');
        console.log(id);
    },

    //Home Page================================================================
    index: function (req, res) {
        res.render('admin/index');
    },
};