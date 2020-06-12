const Book = require('../models/Book');

exports.createBook = (req, res) => {
    const book = req.body
    const bookOk = new Book({
        ...book
    })
    console.log(bookOk);
    bookOk.save().then(result => {
        res.status(201).json({
            message: "Livre créer"
        })
    }).catch(err => {
        res.status(400).json({message: "Une erreur est survenus"});
    })
}

exports.getBooks = (req, res) => {
    Book.find().then(books => {
        res.status(200).json(books);
    }).catch(err => {
        res.status(400).json(err);
    })
}

exports.getBookById = (req, res) => {
    Book.findById(req.params.id).then(book => {
        res.status(200).json(book);
    }).catch(err => {
        res.status(400).json(err);
    })
}

exports.updateBook = (req, res) => {
    const bookUpdated = new Book({
        ...req.body
    })
    Book.findByIdAndUpdate(req.params.id, {bookUpdated}).then(result => {
        res.status(201).json({message: "Le livre à été mis à jour"})
    }).catch(err => {
        res.status(400).json(err)
    })
}

exports.deleteBook = (req, res) => {
    Book.findByIdAndDelete(req.params.id).then(() => {
        res.status(201).json({message: "Le livre à été supprimer"});
    }).catch(err => {
        res.status(400).json(err);
    })
}