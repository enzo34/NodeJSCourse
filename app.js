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

app.delete('/books/:id', booksController.deleteBook);
app.put('/books/:id', booksController.updateBook);
app.get('/books/:id', booksController.getBookById);
app.post('/books', booksController.createBook);
app.get('/books', booksController.getBooks);


module.exports = app;