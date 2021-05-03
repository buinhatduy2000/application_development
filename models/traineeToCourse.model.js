const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const traineeToCourse = new Schema({
    course: {type: String, maxLength: 255},
    trainee: {type: String, maxLength: 255}
});

module.exports = mongoose.model('traineeToCourse', traineeToCourse);