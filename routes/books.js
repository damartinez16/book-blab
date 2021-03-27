const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');
const isLoggedIn = require('../config/auth');

router.get('/', booksCtrl.index);
router.get('/new', isLoggedIn, booksCtrl.new);
router.get('/:id', isLoggedIn, booksCtrl.show);
router.post('/', isLoggedIn, booksCtrl.create);

module.exports = router;
