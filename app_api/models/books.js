var mongoose = require('mongoose');

var titleSchema = new mongoose.Schema({
    title: String,
    link: String
});

var bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    titles: [titleSchema],
    authors: [String],
    publisher: String,
    years: [String],
    body: String,
    start: String,
    stop: String
});

mongoose.model('Book', bookSchema);
