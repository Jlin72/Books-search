import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/SearcBar';
import BookSearchList from '../components/BookSearchList/BookSearchList';
import Wrapper from '../components/Wrapper/Wrapper';

const Home = () => {
  return(
    <>
      <Wrapper>
        <Searchbar />
        <BookSearchList />
      </Wrapper>
    </>
  )
}

export default Home;