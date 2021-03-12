import React, { useRef } from 'react';
import { useBookContext } from '../../utils/GlobalState';
import API from '../../utils/api';
import './style.css'

const BookSearchList = () => {
  const [state, dispatch] = useBookContext();
  const imageRef = useRef();

  const authors = (book) => {
    if(book.volumeInfo.authors) {
      if(book.volumeInfo.authors > 1) {
        return <p><strong>Authors:</strong> {book.volumeInfo.authors.join(', ')}</p>
      } else {
        return <p><strong>Author:</strong> {book.volumeInfo.authors.join('')}</p>
      }
    } else {
      return <p><strong>Author: </strong>No author found</p>
    }
  }

  const addToFavorites = (book) => {
    API.saveToFavorites({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: (book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.smallThumbnail : ''),
      link: book.volumeInfo.infoLink,
      bookId: book.id
    })
    .then(data => console.log(data));
  }

  return(
    <section className='row'>
      {state.loading ? <h1>Loading...</h1> : <></>}
        {state.books.length ? state.books.map(book => <div className='col s12' key={book.id} id={book.id}>
          <div className='card'>
            <div className='card-image'>
              {book.volumeInfo.imageLinks ? (<><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> </>) : (<><img src='https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg' alt='Not found' style={{width: '128px', height: '182px'}} ref={imageRef} /></>)}
            </div>
            <div className='card-content'>
              <h5>{book.volumeInfo.title}</h5>
              {authors(book)}
              {book.volumeInfo.description ? <p><strong>Description: </strong>{book.volumeInfo.description}</p> : <p><strong>Description: </strong>No description available</p>}
            </div>
            <div className='card-action'>
              <a href={book.volumeInfo.previewLink} target="_blank" rel='noreferrer noopener'><button class="btn waves-effect waves-light">More info</button></a>
              <button class="btn waves-effect waves-light" onClick={()=>{addToFavorites(book)}}>Save to favorites</button>
            </div>
          </div>
        </div>) : (<div id='instructions'><h1>Start book search</h1><h4>How to use:</h4><p>Enter book name on the search bar, then either click submit or press the enter key</p></div>)
        }
    </section>
  )
}

export default BookSearchList;