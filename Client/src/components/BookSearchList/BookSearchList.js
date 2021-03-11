import React from 'react';
import { useBookContext } from '../../utils/GlobalState';

const BookSearchList = () => {
  const [state, dispatch] = useBookContext();

  return(
    <>
      {state.books.length ? state.books.map(book => <h1>{book.volumeInfo.title}</h1>) : <h1>Ready to search for books</h1>}
    </>
  )
}

export default BookSearchList;