const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Topic = new Schema({
    topicName: {type: String, maxLength: 255},
    courseName: {type: String, maxLength: 255},
    topicDetail: {type: String, maxLength: 255}
});

module.exports = mongoose.model('Topic', Topic);