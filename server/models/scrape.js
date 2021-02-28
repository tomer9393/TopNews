const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Scrape = new Schema({
    title : {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    year: {
        type: String
    },
    duration: {
        type: String
    },
    genre: {
        type: String
    },
    rating: {
        type: String
    },
    img: {
        type: String
    }
});

module.exports = mongoose.model('Scrape', Scrape);