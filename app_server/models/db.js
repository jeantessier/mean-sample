var debug = require('debug')('DB');

var mongoose = require('mongoose');

var dbURI = "mongodb://localhost/jeantessier";
mongoose.connect(dbURI);

mongoose.connection.on("connected", function() {
    debug("Mongoose connected to " + dbURI);
});

mongoose.connection.on("error", function(err) {
    debug("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", function() {
    debug("Mongoose disconnected");
});
