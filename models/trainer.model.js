const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Trainer = new Schema({
    username: {type: String, maxLength: 255},
    name: {type: String, maxLength: 255},
    dateofbirth: {type: Date, maxLength: 255},
    type: {type: String, maxLength: 255},
    email: {type: String, maxLength: 255},
    phonenumber: {type: String, maxLength: 255}
});

module.exports = mongoose.model('Trainer', Trainer);
