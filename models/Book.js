import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const book = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true
  }
});

const Book = mongoose.model('Book', book);

module.exports = Book;