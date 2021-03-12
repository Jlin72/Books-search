const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    required: true
  },
  bookId: {
    type: String,
    required: true
  },
  date: {type:Date, default: Date.now()}
});

const Book = mongoose.model('Book', book);

module.exports = Book;