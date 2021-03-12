import React, { useEffect } from 'react';
import API from '../../utils/api';
import { useBookContext } from '../../utils/GlobalState';
import {LOADING, DELETE_SAVED, SAVE_BOOK} from '../../utils/actions';
import { render } from 'react-dom';

const FavoritesList = () => {
  const [state, dispatch] = useBookContext();

  const getFavoriteBooks = () => {
    API.getFavorites()
      .then(data => {
        console.log(data)
        dispatch({type: LOADING})
        dispatch({type: SAVE_BOOK, savedBooks: data.data});
      })
      .catch(err => console.log(err));
  };

  const handleRemove = (id) => {
    dispatch({type: LOADING});
    API.removeFromFavorites(id)
      .then(()=> {
        getFavoriteBooks();
      });
  }
  
  useEffect(()=>{
    getFavoriteBooks()
  }, []);

  const renderFavorites = () => {
    if(state.savedBooks.length) {
      return (
        state.savedBooks.map(book => 
          <li id={book.bookId} key={book._id}>
            <img src={book.image} alt={book.title} />
            <h5>{book.title}</h5>
            <p><strong>Author: </strong>{book.authors.join('')}</p>
            <p><strong>Description: </strong>{book.description}</p>
            <a href={book.link} target="_blank" rel='noreferrer noopener'><button className="btn waves-effect waves-light">Buy</button></a>
            <button className="btn waves-effect waves-light" onClick={() => handleRemove(book._id)}>Remove from favorites</button>
          </li>
        )
      )
    }
  }

  return(
    <article>
      {console.log(state.savedBooks)}
      <ul>
        {renderFavorites()}
      </ul>
    </article>
  )
}

export default FavoritesList;