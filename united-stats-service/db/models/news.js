const mongoose = require('mongoose');

const News = mongoose.model('News', {
    title: String,
    content: String,
    date: Date,
    author: String
});

module.exports = News;