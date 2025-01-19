# mean-sample
A token application that uses the MEAN stack.

* Data is stored in MongoDB.
* A REST API is built using the Express framework.
* The frontend is an AngularJS app.
* The backend runs on Node.js.

## Running Example

It is hosted on Heroku and MongoDB Atlas (formerly mLab, formerly MongoLab) for
a [running example](https://afternoon-cliffs-9951.herokuapp.com/Books.html).

## Running It Locally

Make sure all the packages are present.

```bash
npm install
```

### Running with Heroku

You can run it locally with:

```bash
heroku local
```

And point your browser to [localhost:5000](http://localhost:5000/).

### Running with Node

You can run it locally with:

```bash
npm start
```

And point your browser to [localhost:3000](http://localhost:3000/Books.html).

Or call the REST endpoint at [localhost:3000/api](http://localhost:3000/api/books).

### Test Data

You have to populate the database directly.  You can use this template to add
books to the test data:

```javascript
db.books.insertOne(
  {
    name: "Fangs",
    titles:  [
      {
        title: "Fangs",
        link: "https://www.amazon.com/dp/1524860670"
      },
    ],
    authors: [
      "Sarah Andersen",
    ],
    publisher: "Andrews McMeel Publishing",
    years: [
      "2020",
    ],
    body: "<p>A funny comic book about a girl vampire and a boy werewolf. Filled with sarcastic humor, like:</p><blockquote> <p>- We should have a baby.</p><p>- For dinner?</p><footer>p. 86</footer></blockquote> <p>It pokes fun at many of the vampire and werewolf and new love tropes.</p>",
    start: "2020-09-01",
    stop: "2020-09-01",
    createdAt: new Date(),
    updatedAt: new Date()
  }
)
```

## Making Changes

You can update NPM packages with:

```bash
npm update
```

After committing your changes, push them to Heroku to update the running
example.

Changes to the `main` branch should deploy automatically.  You can do a manual
deployment with:

```bash
git push heroku main
```
