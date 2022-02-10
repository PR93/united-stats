const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    author:{
        type: String,
        default: 'kibic'
    }
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;