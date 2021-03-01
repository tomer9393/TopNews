const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    fullName: { 
        type: String
    },
    email: {
        type: String
    },
    message:{
        type: String
    },
    published:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Contact', Contact);