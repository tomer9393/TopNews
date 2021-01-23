const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
    title: {
        type: String,
        required: true
    },
    categoty: {
        type: String
    },
    subTitle: {
        type: String
    },
    body: {
        type: String
    },
    published: {
        type: Date,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Article', Article);