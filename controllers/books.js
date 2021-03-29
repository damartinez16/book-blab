const Book = require('../models/book');


module.exports = {
    index,
    show,
    create,
    new: newBook,
}

function index(req, res) {
    Book.find({}, function(err, books) {
        res.render('books/index', { title: 'All Books', books});
    });
}

function show(req, res) {
    Book.findById(req.params.id, function(err, book) {
        res.render('books/show', { title: 'Movie Details', book});
    });
}

function create(req, res) {
    const book = new Book(req.body);
    book.userRecommending = req.user._id;
    book.save(function(err) {
      if (err) console.log(err)
      res.redirect(`/books/${book._id}`);
    });
  }

  function newBook(req, res) {
      res.render('books/new', { title: 'Add Book'});
  }