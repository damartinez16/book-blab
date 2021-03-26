const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max:5,
        default: 5
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    comments: [commentSchema],
}, {
    timestamps: true
});