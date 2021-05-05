const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Trainer = new Schema({
    name: {type: String, maxLength: 255},
    age: { type: String, maxLength: 255 },
    dateofbirth: {type: Date, maxLength: 255},
    education: {type: String, maxLength: 255},
    mainprogramminglanguage: {type: String, maxLength: 255}
});

module.exports = mongoose.model('Trainer', Trainer);
