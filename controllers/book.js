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