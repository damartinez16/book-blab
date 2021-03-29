const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    genre: {
        type: String,
        enum: ['Sci-Fi/Fantasy', 'Mystery/Thriller', 'Young-Adult',
            'Horror', 'Fiction', 'Non-Fiction', 'Humor/Comedy', 'Graphic Novel']
    },
    comments: [commentSchema],
}, {
    timestamps: true
});


module.exports = mongoose.model('Book', bookSchema);