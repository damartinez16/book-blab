const Book = require('../models/book');

module.exports = {
    create,
    delete: deleteComment
};

function deleteComment(req, res, next) {
    Book.findOne({'comments._id': req.params.id}).then(function(book) {
        const comment = book.comments.id(req.paarams.id);
        if (!comments.user.equals(req.user._id)) return res.redirect('/books');
        comment.remove();
        book.save().then(function() {
            res.redirect(`/books/${book._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}

function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        book.comments.push(req.body);
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
}