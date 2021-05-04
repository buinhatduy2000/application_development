var Account = require("../models/account.model");
var Course = require("../models/course.model");
var CourseCategory = require("../models/courseCategory.model")
var Topic = require("../models/topic.model");
var TraineeToCourse = require("../models/traineeToCourse.model");
var TrainerToCourse = require("../models/trainerToCourse.model");

module.exports = {
    //Account=============================================================
    viewAccount: async function (req, res) {
        res.render('staff/viewAccount', {
            accountAdmin: await Account.find({ role: 'admin' }),
            accountStaff: await Account.find({ role: 'manager' }),
            accountTrainer: await Account.find({ role: 'trainer' }),
            accountTrainee: await Account.find({ role: 'trainee' })
        });
    },

<<<<<<< Updated upstream
=======
    getCreateAccount: function (req, res) {
        res.render('staff/createAccount');
    },

    postCreateAccount: function (req, res) {
        const account = new Account(req.body);
        account.save();
        res.redirect('viewAccount');
    },

>>>>>>> Stashed changes
    deleteAccount: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        var condition = { '_id': ObjectID };
        await Account.deleteOne(condition);
        res.redirect('/staff/viewAccount');
        console.log(id);
    },

    getUpdateAccount: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        var account = await Account.findOne(condition)
<<<<<<< Updated upstream
        res.render('staff/updateAccount', {
            accounts: account
=======

        res.render('staff/updateAccount', {
            account: account
>>>>>>> Stashed changes
        });
    },

    postUpdateAccount: async function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var username = req.body.username;
        var password = req.body.password;
        var role = req.body.role;

        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };

        await Account.updateOne(condition, req.body)
        res.redirect('/staff/viewAccount');
        console.log(id, name, username, password, role);

    },


    //Course Category======================================================
    viewCourseCategory: async function (req, res) {
        var category =  await CourseCategory.find({});
        res.render('staff/viewCourseCategory', {
            categorys: category
        });
    },

    getCreateCourseCategory: function (req, res) {
        res.render('staff/createCourseCategory')
    },

    postCreateCourseCategory: function (req, res) {
        const courseCategory = new CourseCategory(req.body);
        courseCategory.save();
        res.redirect('viewCourseCategory');
    },
    deleteCourseCategory: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await CourseCategory.deleteOne(condition);
        res.redirect('/staff/viewCourseCategory');
        console.log(id);
    },
    updateCourseCategory: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        var courseCategory = await CourseCategory.findOne(condition)
        res.render('staff/updateCourseCategory', {
            courseCategorys: courseCategory
        });
    },
    POSTupdateCourseCategory: async function (req, res) {
        var id = req.params.id;
        var category = req.body.category;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await courseCategory.updateOne(condition, req.body)
        res.redirect('/staff/viewCourseCategory');
    },

    //Course================================================================

    viewCourse: async function (req, res) {
        var category = req.params.category;
        var course = await Course.find({courseCategory: category});
        res.render('staff/viewCourse', {
            courses: course,
            category: category
        });
    },

    getCreateCourse: function (req, res) {
        var category = req.params.category;
        res.render('staff/createCourse', {
            category: category
        });
    },
    postCreateCourse: function (req, res) {
        var category = req.body.courseCategory;
        const course = new Course(req.body);
        course.save();
        res.redirect('/staff/viewCourse/' + category);
    },

    deleteCourse: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        var category = req.body.courseCategory;
        await Course.deleteOne(condition);
        res.redirect('/staff/viewCourseCategory');
    },

    getUpdateCourse: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        var course = await Course.findOne(condition)
        res.render('staff/updateCourse', {
            course: course
        });
    },
    postUpdateCourse: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await Course.updateOne(condition, req.body)
        res.redirect('/staff/viewCourse/' + req.body.courseCategory);
    },

    //Topic==================================================================
    viewTopic: async function (req, res) {
        var course = req.params.course
        var topic = await Topic.find({courseName: course})
        res.render('staff/viewTopic', {
            course: course,
            topics: topic
        });
    },
<<<<<<< Updated upstream
    createTopic: function (req, res) {
=======
    getCreateTopic: function (req, res) {
>>>>>>> Stashed changes
        var course = req.params.course
        res.render('staff/createTopic', {
            course: course
        });
    },
    postCreateTopic: function (req, res) {
        var courseName = req.body.courseName;
        const topic = new Topic(req.body);
        topic.save();
<<<<<<< Updated upstream
        res.redirect('staff/viewTopic/' + courseName);
    },
    deleteTopic: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await Topic.deleteOne(condition);
=======
        res.redirect('/staff/viewTopic/' + courseName);
    },
    
    deleteTopic: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await Topic.deleteOne(condition);
        res.redirect('/staff/viewCourseCategory');
    },

    getUpdateTopic: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        var topic = await Topic.findOne(condition)
        res.render('staff/updateTopic', {
            topic: topic
        });
    },

    postUpdateTopic: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await Topic.updateOne(condition, req.body);
>>>>>>> Stashed changes
        res.redirect('/staff/viewTopic');
    },

    // Assign trainer to Course===========================================================
    viewTrainerToCourse: async function (req, res) {
        var viewTrainer = await TrainerToCourse.find();
        res.render('staff/viewTrainer', {
            viewTrainers: viewTrainer
        });
    },

    addTrainer: async function (req, res) {
<<<<<<< Updated upstream
        var course = await Course.find({});
=======
        //var course = db.get('Course').value();
        var course = await Course.find({});
        //var trainer = db.get('accounts').filter({ role: 'trainer' }).cloneDeep().value();
>>>>>>> Stashed changes
        var trainer = await Account.find({role: "trainer"});
        res.render('staff/trainerCourse', {
            courses: course, trainers: trainer
        });
        console.log(course)
    },
    postAddTrainer: function (req, res) {
        const trainerToCourse = new TrainerToCourse(req.body);
        trainerToCourse.save();
        res.redirect('viewTrainer');
    },
    deleteTrainer: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await TrainerToCourse.deleteOne(condition);
        res.redirect('/staff/viewTrainer');
    },

    // Assign trainee to Course===========================================================
    viewTraineeToCourse: async function (req, res) {
        var view = await TraineeToCourse.find();
        res.render('staff/viewTrainee', {
            views: view
        });
    },

    addTrainee: async function (req, res) {
<<<<<<< Updated upstream
        var course = await TrainerToCourse.find({});
=======
        //var course = db.get('trainerToCourse').value();
        var course = await TrainerToCourse.find({});
        //var trainee = db.get('accounts').filter({ role: 'trainee' }).cloneDeep().value();
>>>>>>> Stashed changes
        var trainee = await Account.find({role: "trainee"});
        res.render('staff/traineeCourse', {
            courses: course, trainees: trainee
        });
    },
    postAddTrainee: function (req, res) {
        const traineeToCourse = new TraineeToCourse(req.body);
        traineeToCourse.save();
        res.redirect('viewTrainee');
    },
    deleteTrainee: async function (req, res) {
        var id = req.params.id;
        var ObjectID = require('mongodb').ObjectID(id);
        let condition = { '_id': ObjectID };
        await TraineeToCourse.deleteOne(condition);
        res.redirect('/staff/viewTrainee');
        console.log(id);
    },

    //Home Page================================================================
    index: function (req, res) {
        res.render('staff/index');
    },
};