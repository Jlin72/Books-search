import React, { useRef } from 'react';
import API from '../../utils/api';
import { FIND_BOOK, LOADING } from '../../utils/actions';
import { useBookContext } from '../../utils/GlobalState';
import './SearchBar.css';

const Searchbar = () => {
  const inputBookTitle = useRef();

  //eslint-disable-next-line
  const [state, dispatch] = useBookContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBooks(inputBookTitle.current.value)
    .then(data=>{
      dispatch({type: LOADING});
      dispatch({
        type: FIND_BOOK,
        books: data.data.items
      });
    });
  }

  return(
    <>
    <div className='card'>
      <div className='card-content'>
        <form onSubmit = {handleSubmit} className ='row' id='form'>
          <input 
            name='bookSearch'
            placeholder="Enter book title"
            ref= {inputBookTitle}
            className='col s10'
          />
          <button className="btn waves-effect waves-light col s2" type="submit" name="action">Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Searchbar;