const express = require('express')
const router = express.Router()
const { expressjwt: jwt } = require('express-jwt')
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'currentUser',
    algorithms: ['HS256']
})

const ctrlBooks = require('../controllers/books')
const ctrlAuth = require('../controllers/authentication')

router.get('/books', ctrlBooks.booksList)
// router.post('/books', ctrlBooks.booksCreate)
router.get('/books/:bookid', ctrlBooks.booksReadOne)
// router.put('/books/:bookid', ctrlBooks.booksUpdateOne)
router.delete('/books/:bookid', auth, ctrlBooks.booksDeleteOne)

router.post('/register', ctrlAuth.register)
router.post('/login', ctrlAuth.login)

module.exports = router
