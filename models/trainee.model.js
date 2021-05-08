const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Trainee = new Schema({
    username: {type: String, maxLength: 255},
    name: {type: String, maxLength: 255},
    dateofbirth: {type: Date, maxLength: 255},
    education: {type: String, maxLength: 255},
    mainprogramminglanguage: {type: String, maxLength: 255}
});

module.exports = mongoose.model('Trainee', Trainee);
