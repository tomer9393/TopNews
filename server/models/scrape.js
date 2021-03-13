const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Scrape = new Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String
    },
    published: {
        type: Date
    },
    time: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Scrape', Scrape);