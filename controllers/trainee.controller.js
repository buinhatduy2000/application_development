var Course = require("../models/course.model");
var CourseCategory = require("../models/courseCategory.model")
var Topic = require("../models/topic.model");

module.exports = {

    viewCourseCategory: async function (req, res) {
        var category =  await CourseCategory.find({});
        res.render('trainee/viewCourseCategory', {
            categorys: category
        });
    },

    viewCourse: async function (req, res) {
        var category = req.params.category;
        var course = await Course.find({courseCategory: category});
        res.render('trainee/viewCourse', {
            courses: course,
            category: category
        });
    },

    viewTopic: async function (req, res) {
        var course = req.params.course
        var topic = await Topic.find({courseName: course})
        res.render('trainee/viewTopic', {
            topics: topic
        });
    },

    //Home Page================================================================
    index: function (req, res) {
        res.render('trainee/index');
    },
};