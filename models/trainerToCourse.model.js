const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const trainerToCourse = new Schema({
    courseName: {type: String, maxLength: 255},
    trainer: {type: String, maxLength: 255}
});

module.exports = mongoose.model('trainerToCourse', trainerToCourse);