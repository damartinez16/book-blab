// require('dotenv').config();
require('./config/database');

const Book = require('./models/book');


let b, books;

Book.find({}, (err, bookDocs) => books = bookDocs);

