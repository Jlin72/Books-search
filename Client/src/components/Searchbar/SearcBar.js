import React, { useRef } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import API from '../../utils/api';
import { FIND_BOOK, LOADING } from '../../utils/actions';
import { useBookContext } from '../../utils/GlobalState';

const Searchbar = () => {
  const inputBookTitle = useRef();

  const [state, dispatch] = useBookContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBooks(inputBookTitle.current.value)
    .then(data=>{
      console.log(data.data.items);
      dispatch({type: LOADING});
      dispatch({
        type: FIND_BOOK,
        books: data.data.items
      });
    });
  }

  return(
    <Wrapper>
      <form onSubmit = {handleSubmit}>
        <input 
          name='bookSearch'
          placeholder="Enter the book title...."
          ref= {inputBookTitle}
        />
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Searchbar;