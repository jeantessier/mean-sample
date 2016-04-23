var mongoose = require('mongoose');
var Book = mongoose.model('Book');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET list of books */
module.exports.booksList = function(req, res) {
    Book
        .find()
        .exec(function(err, books) {
            if (!books) {
                sendJSONresponse(res, 404, {
                    "message": "No books not found"
                });
                return;
            } else if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log(books);
            sendJSONresponse(res, 200, { title: "Recent Readings", books: books });
        });
};

/* GET a book by the id */
module.exports.booksReadOne = function(req, res) {
    console.log('Finding book details', req.params);
    if (req.params && req.params.bookid) {
        Book
            .findById(req.params.bookid)
            .exec(function(err, book) {
                if (!book) {
                    sendJSONresponse(res, 404, {
                        "message": "bookid not found"
                    });
                    return;
                } else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(book);
                sendJSONresponse(res, 200, book);
            });
    } else {
        console.log('No bookid specified');
        sendJSONresponse(res, 404, {
            "message": "No bookid in request"
        });
    }
};

/* DELETE /api/books/:bookid */
module.exports.booksDeleteOne = function(req, res) {
    var bookid = req.params.bookid;
    if (bookid) {
        Book
            .findByIdAndRemove(bookid)
            .exec(function(err, book) {
                if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log("Book id " + bookid + " deleted");
                sendJSONresponse(res, 204, null);
            });
    } else {
        sendJSONresponse(res, 404, {
            "message": "No bookid in request"
        });
    }
};
