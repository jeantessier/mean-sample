const mongoose = require('mongoose')
const Book = mongoose.model('Book')

const sendJSONresponse = (res, status, content) => res.status(status).json(content)

/* GET list of books */
module.exports.booksList = (req, res) => {
    Book
        .find()
        .sort({ start: -1 })
        .then(books => {
            sendJSONresponse(res, 200, { title: "Recent Readings", books: books })
        }).catch(err => {
            console.log(err)
            sendJSONresponse(res, 404, err)
        })
}

/* GET a book by the id */
module.exports.booksReadOne = (req, res) => {
    console.log('Finding book details', req.params)
    Book
        .findOne({ _id: req.params.bookid })
        .then(book => {
            if (book) {
                sendJSONresponse(res, 200, book)
            } else {
                sendJSONresponse(res, 404, { message: `No book with ID ${req.params.bookid}` })
            }
        }).catch (err => {
            console.log(err)
            sendJSONresponse(res, 404, err)
        })
}

/* DELETE /api/books/:bookid */
module.exports.booksDeleteOne = (req, res) => {
    Book
        .findOneAndDelete({ _id: req.params.bookid })
        .then(book => {
            if (book) {
                console.log(`Book id ${req.params.bookid} deleted`)
                sendJSONresponse(res, 204, null)
            } else {
                sendJSONresponse(res, 404, { message: `No book with ID ${req.params.bookid}` })
            }
        }).catch (err => {
            console.log(err)
            sendJSONresponse(res, 404, err)
        })
}
