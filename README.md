# mean-sample
A token application that uses the MEAN stack.

* Data is stored in MongoDB.
* A REST API is built using the Express framework.
* The frontend is an AngularJS app.
* The backend runs on Node.js.

## Running Example

It is hosted on Heroku and mLab (formerly MongoLab) for a [running example](https://afternoon-cliffs-9951.herokuapp.com/Books.html).

## Running It Locally

Make sure all the packages are present.

    $ npm install

### Running with Heroku

You can run it locally with:

    $ heroku local

And point your browser to [localhost:5000](http://localhost:5000/).

### Running with Node

You can run it locally with:

    $ npm start

And point your browser to [localhost:3000](http://localhost:3000/).

## Making Changes

You can update NPM packages with:

    $ npm update

After committing your changes, push them to Heroku to update the running
example.

    $ git push heroku master
