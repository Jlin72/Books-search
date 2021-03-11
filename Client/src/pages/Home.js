import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/SearcBar';
import BookSearchList from '../components/BookSearchList/BookSearchList';
const Home = () => {
  return(
    <>
      <Navbar />
      <Searchbar />
      <BookSearchList />
    </>
  )
}

export default Home;