const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.post('/books/:id/comments', isLoggedIn, commentsCtrl.create);
router.put('/comments/:id', isLoggedIn, commentsCtrl.update);
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete);
router.get('/comments/:id/edit', isLoggedIn, commentsCtrl.edit);
module.exports = router;