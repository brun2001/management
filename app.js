const express = require('express');
const app = express();
const books = require('./models/booksModel');

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Get books by genre
app.get('/books/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const booksByGenre = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    res.json(booksByGenre);
});

// Set up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
