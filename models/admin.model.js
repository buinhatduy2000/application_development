const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Admin = new Schema({
    name: {type: String, maxLength: 255},
    dateofbirth: {type: Date, maxLength: 255},
});

module.exports = mongoose.model('Admin', Admin);
