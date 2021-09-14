const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imgPost: {
        type: String,
        require: [true, 'Please choose picture for your post'],
    },
    title: {
        type: String,
        require: [true, 'Please write title for your post'],
    },
    desc: {
        type: String,
        require: [true, 'Please write desc for your post'],
    },
    author: {
        type: String,
        require: true,
    },
    categories : {
        type: Array
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema);