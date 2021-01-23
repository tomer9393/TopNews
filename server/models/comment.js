const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    published: {
        type: Date,
        default: Date.now
    }
});