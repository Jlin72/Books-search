import React from 'react';
import { useBookContext } from '../../utils/GlobalState';

const BookSearchList = () => {
  const [state, dispatch] = useBookContext();

  const authors = (book) => {
    if(book.volumeInfo.authors) {
      if(book.volumeInfo.authors > 1) {
        <p><strong>Authors:</strong> {book.volumeInfo.authors.join(', ')}</p>
      } else {
        <p><strong>Author:</strong> {book.volumeInfo.authors.join('')}</p>
      }
    } else {
      <p><strong>Author: </strong>No author found</p>
    }
  }

  return(
    <>
      {state.loading ? <h1>Loading...</h1> : <></>}
      <ul>
        {state.books.length ? state.books.map(book => <li key={book.id} id={book.id}>
          {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} /> : <img src='https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg' style={{width: '128px', height: '192px'}} alt='Not found' />}
          <h5>Title: {book.volumeInfo.title}</h5>
          {authors(book)}
          {book.volumeInfo.description ? <p><strong>Description: </strong>{book.volumeInfo.description}</p> : <p><strong>Description: </strong>No description available</p>}
          <a href={book.volumeInfo.infoLink} target="_blank" rel='noreferrer noopener'><button class="btn waves-effect waves-light">Buy</button></a>
          <button class="btn waves-effect waves-light">Save to favorites</button>
        </li>) : <h1>Ready to search for books</h1>}
      </ul>
    </>
  )
}

export default BookSearchList;