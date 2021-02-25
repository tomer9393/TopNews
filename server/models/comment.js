const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    articleId: {
        type: String
    },
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

module.exports = mongoose.model('Comment', Comment);
