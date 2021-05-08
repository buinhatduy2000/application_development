const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    courseName: {type: String, maxLength: 255},
    courseCategory: {type: String, maxLength: 255}
});

module.exports = mongoose.model('Course', Course);