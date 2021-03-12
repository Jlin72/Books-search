import React, { useEffect } from 'react';
import API from '../../utils/api';
import { useBookContext } from '../../utils/GlobalState';
import {LOADING, SAVE_BOOK} from '../../utils/actions';

const FavoritesList = () => {
  const [state, dispatch] = useBookContext();

  const getFavoriteBooks = () => {
    API.getFavorites()
      .then(data => {
        dispatch({type: LOADING})
        dispatch({type: SAVE_BOOK, savedBooks: data.data});
      })
      .catch(err => console.log(err));
  };

  const authors = (book) => {
    if(book.authors.length) {
      if(book.authors.length > 1) {
        return <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
      } else {
        return <p><strong>Author:</strong> {book.authors.join('')}</p>
      }
    } else {
      return <p><strong>Author: </strong>No author found</p>
    }
  }

  const handleRemove = (id) => {
    API.removeFromFavorites(id)
      .then(()=> {
        getFavoriteBooks();
      });
  }
  
  useEffect(()=>{
    getFavoriteBooks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFavorites = () => {
    if(state.savedBooks.length) {
      return (
        <section className='row'>
          {state.savedBooks.map(book => 
            <div id={book.bookId} key={book._id} className='col s12'>
              <div className="card">
                <div className='card-image'>
                  {book.image ? <img src={book.image} alt={book.title} /> : <img src='https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg' style={{width: '128px', height: '192px'}} alt='Not found' /> }
                </div>
                <div className='card-content'>
                  <h5>{book.title}</h5>
                  {authors(book)}
                  {book.description ? <p><strong>Description: </strong>{book.description}</p> : <p><strong>Description:</strong> No description available</p> }
                </div>
                <div className='card-action'>
                  <a href={book.link} target="_blank" rel='noreferrer noopener'><button className="btn waves-effect waves-light">More info</button></a>
                  <button className="btn waves-effect waves-light" onClick={() => handleRemove(book._id)}>Remove from favorites</button>
                </div>
              </div>
            </div>
          )}
        </section>
      )
    }
  }

  return(
    <>
      {state.loading ? <h1>Loading...</h1> : renderFavorites() }
    </>
  )
}

export default FavoritesList;