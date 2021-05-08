var mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://an:an752001@mycluster.9undu.mongodb.net/EducationSystem', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect success')
    }
    catch {
        console.log('connect failed')
    }
}

module.exports = { connect };