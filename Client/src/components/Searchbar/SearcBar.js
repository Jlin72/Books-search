import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import API from '../../utils/api';

const Searchbar = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBooks('Harry Potter')
    .then(data=>console.log(data.data.items));
  }

  return(
    <Wrapper>
      <form onSubmit = {handleSubmit}>
        <input 
          name='bookSearch'
          value="Harry Potter"
        />
      </form>
    </Wrapper>
  )
}

export default Searchbar;