var Account = require("../models/account.model");
var Course = require("../models/course.model");
var CourseCategory = require("../models/courseCategory.model")
var Topic = require("../models/topic.model");
var TraineeToCourse = require("../models/traineeToCourse.model");
var TrainerToCourse = require("../models/trainerToCourse.model");

module.exports = {
    //Account=============================================================
    viewAccount: function (req, res) {
        res.render('admin/viewAccount', {
            accountAdmin: Account.find({ role: 'admin' }),
            accountStaff: Account.find({ role: 'manager' }),
            accountTrainer: Account.find({ role: 'trainer' }),
            accountTrainee: Account.find({ role: 'trainee' })
        });
    },

    getCreateAccount: function (req, res) {
        res.render('admin/createAccount');
    },

    postCreateAccount: function (req, res) {
        const account = new Account(req.body);
        account.save();
        res.redirect('viewAccount');
    },

    deleteAccount: function (req, res) {
        var id = req.params.id;
        //db.get('accounts').remove({ id: id }).write();
        res.redirect('/admin/viewAccount');
        console.log(id);
    },

    getUpdateAccount: function (req, res) {
        var id = req.params.id;
        res.render('admin/updateAccount', {
            //accounts: db.get('accounts').find({ id: id }).value()
        });
    },

    postUpdateAccount: function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var username = req.body.username;
        var password = req.body.password;
        var role = req.body.role;
        //db.get('accounts').find({ id: id }).assign({ name: name}).write();
        //db.get('accounts').find({ id: id }).assign({ username: username}).write();
        //db.get('accounts').find({ id: id }).assign({ password: password}).write();
        //db.get('accounts').find({ id: id }).assign({ role: role}).write();
        res.redirect('/admin/viewAccount');
        console.log(id, name, username, password, role);

    },


    //Course Category======================================================
    viewCourseCategory: function (req, res) {
        var category = CourseCategory.find();
        res.render('admin/viewCourseCategory', {
            categorys: category
        });
    },

    getCreateCourseCategory: function (req, res) {
        res.render('admin/createCourseCategory')
    },

    postCreateCourseCategory: function (req, res) {
        req.body.id = shortid.generate();
        const courseCategory = new CourseCategory(req.body);
        courseCategory.save();
        res.redirect('viewCourseCategory');
    },
    deleteCourseCategory: function (req, res) {
        var id = req.params.id;
        //db.get('courseCategory').remove({ id: id }).write();
        res.redirect('/admin/viewCourseCategory');
        console.log(id);
    },
    updateCourseCategory: function (req, res) {
        var id = req.params.id;
        //var courseCategory = db.get('courseCategory').find({ id: id }).value();
        res.render('admin/updateCourseCategory', {
            courseCategorys: courseCategory
        });
    },
    POSTupdateCourseCategory: function (req, res) {
        var id = req.params.id;
        var category = req.body.category;
        //db.get('courseCategory').find({ id: id }).assign({ category: category }).write();
        res.redirect('/admin/viewCourseCategory');
    },

    //Course================================================================

    viewCourse: function (req, res) {
        var category = req.params.category;
        var course = Course.find();
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
        const course = new Course(req.body);
        course.save();
        res.redirect('/admin/viewCourse/' + category);
        console.log(category)
    },

    deleteCourse: function (req, res) {
        var id = req.params.id;
        var category = req.body.courseCategory;
        //db.get('Course').remove({ id: id }).write();
        res.redirect('/admin/viewCourseCategory');
        console.log(category);
    },

    getUpdateCourse: function (req, res) {
        var id = req.params.id;
        //var course = db.get('Course').find({ id: id }).value();
        res.render('admin/updateCourse', {
            course: course
        });
    },
    postUpdateCourse: function (req, res) {
        var id = req.params.id;
        var courseName = req.body.courseName;
        //db.get('Course').find({ id: id }).assign({ courseName: courseName }).write();
        res.redirect('/admin/viewCourse/' + req.body.courseCategory);
        console.log(req.body.courseCategory);
    },

    //Topic==================================================================
    viewTopic: function (req, res) {
        var course = req.params.course
        var topic = Topic.find()
        res.render('admin/viewTopic', {
            course: course,
            topics: topic
        });
    },
    getCreateTopic: function (req, res) {
        var course = req.params.course
        res.render('admin/createTopic', {
            course: course
        });
    },
    postCreateTopic: function (req, res) {
        var courseName = req.body.courseName;
        const topic = new Topic(req.body);
        topic.save();
        res.redirect('/admin/viewTopic/' + courseName);
    },
    
    deleteTopic: function (req, res) {
        var id = req.params.id;
        //db.get('topic').remove({ id: id }).write();
        res.redirect('/admin/viewTopic');
        console.log(id);
    },

    // Assign trainer to Course===========================================================
    viewTrainerToCourse: function (req, res) {
        var viewTrainer = TrainerToCourse.find();
        res.render('admin/viewTrainer', {
            viewTrainers: viewTrainer
        });
    },

    addTrainer: function (req, res) {
        //var course = db.get('Course').value();
        //var trainer = db.get('accounts').filter({ role: 'trainer' }).cloneDeep().value();
        res.render('admin/trainerCourse', {
            courses: course, trainers: trainer
        });
    },
    postAddTrainer: function (req, res) {
        const trainerToCourse = new TrainerToCourse(req.body);
        trainerToCourse.save();
        res.redirect('viewTrainer');
    },
    deleteTrainer: function (req, res) {
        var id = req.params.id;
        //db.get('trainerToCourse').remove({ id: id }).write();
        res.redirect('/admin/viewTrainer');
        console.log(id);
    },

    // Assign trainee to Course===========================================================
    viewTraineeToCourse: function (req, res) {
        var view = TraineeToCourse.find();
        res.render('admin/viewTrainee', {
            views: view
        });
    },

    addTrainee: function (req, res) {
        //var course = db.get('trainerToCourse').value();
        //var trainee = db.get('accounts').filter({ role: 'trainee' }).cloneDeep().value();
        res.render('admin/traineeCourse', {
            courses: course, trainees: trainee
        });
    },
    postAddTrainee: function (req, res) {
        const traineeToCourse = new TraineeToCourse(req.body);
        traineeToCourse.save();
        res.redirect('viewTrainee');
    },
    deleteTrainee: function (req, res) {
        var id = req.params.id;
        //db.get('traineeToCourse').remove({ id: id }).write();
        res.redirect('/admin/viewTrainee');
        console.log(id);
    },

    //Home Page================================================================
    index: function (req, res) {
        res.render('admin/index');
    },
};