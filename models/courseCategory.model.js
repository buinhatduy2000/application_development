const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const courseCategory = new Schema({
    category: { type: String, maxLength: 255 },

});

module.exports = mongoose.model('courseCategory', courseCategory);