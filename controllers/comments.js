const Book = require('../models/book');

module.exports = {
    create,
    delete: deleteComment,
    update,
    edit
};

function edit(req, res) {
    Book.findOne({'comments._id': req.params.id}, function(err, book) {
      res.render('books/edit',  { title: 'Edit Review', book});
    });
  }

function update(req, res) {
    Book.findOne({'comments._id': req.params.id}, function(err, book) {
      const comment = book.comments.id(req.params.id);
      if (!comment.user._id.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
      Object.assign(comment, req.body);
      book.save(function(err) {
        res.redirect(`/books/${book._id}`);
      });
    });
  }

function deleteComment(req, res, next) {
    Book.findOne({'comments._id': req.params.id}).then(function(book) {
        const comment = book.comments.id(req.params.id);
        if (!comment.user.equals(req.user._id)) return res.redirect(`/books/${books._id}`);
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