const mongoose = require('mongoose')
const Book = mongoose.model('Book')

const sendJSONresponse = (res, status, content) => {
    res.status(status)
    res.json(content)
}

/* GET list of books */
module.exports.booksList = (req, res) => {
    Book
        .find()
        .sort({ start: -1 })
        .exec((err, books) => {
            if (!books) {
                sendJSONresponse(res, 404, {
                    "message": "No books not found"
                })
                return
            } else if (err) {
                console.log(err)
                sendJSONresponse(res, 404, err)
                return
            }
            console.log(books)
            sendJSONresponse(res, 200, { title: "Recent Readings", books: books })
        })
}

/* GET a book by the id */
module.exports.booksReadOne = (req, res) => {
    console.log('Finding book details', req.params)
    if (req.params && req.params.bookid) {
        Book
            .findById(req.params.bookid)
            .exec((err, book) => {
                if (!book) {
                    sendJSONresponse(res, 404, {
                        "message": "bookid not found"
                    })
                    return
                } else if (err) {
                    console.log(err)
                    sendJSONresponse(res, 404, err)
                    return
                }
                console.log(book)
                sendJSONresponse(res, 200, book)
            })
    } else {
        console.log('No bookid specified')
        sendJSONresponse(res, 404, {
            "message": "No bookid in request"
        })
    }
}

/* DELETE /api/books/:bookid */
module.exports.booksDeleteOne = (req, res) => {
    const bookid = req.params.bookid
    if (bookid) {
        Book
            .findByIdAndRemove(bookid)
            .exec((err, book) => {
                if (err) {
                    console.log(err)
                    sendJSONresponse(res, 404, err)
                    return
                }
                console.log("Book id " + bookid + " deleted")
                sendJSONresponse(res, 204, null)
            })
    } else {
        sendJSONresponse(res, 404, {
            "message": "No bookid in request"
        })
    }
}
