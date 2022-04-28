const mongoose = require('mongoose')
var timestamps = require('mongoose-timestamp')

const titleSchema = new mongoose.Schema({
    title: String,
    link: String
})

const bookSchema = new mongoose.Schema({
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
})
bookSchema.plugin(timestamps)

mongoose.model('Book', bookSchema)
