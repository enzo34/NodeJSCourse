const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const booksController = require('./controllers/book');

const app = express();
mongoose.connect('mongodb://localhost:27017/apinodejscours', {
    useNewUrlParser: true
}).then(() => {
    console.log("Connection mongodb ok");
}).catch(err => {
    console.log(err);
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/books', booksController.createBook);
app.get('/books', (req, res, next) => {
    const books = [
        {
            _id: 1,
            name: "Test",
            description: "lorem ipsum"
        },
        {
            _id: 2,
            name: "Test",
            description: "lorem ipsum"
        }
    ]
    res.status(200).json(books)
})

module.exports = app;