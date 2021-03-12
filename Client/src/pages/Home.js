import React from 'react';
import Searchbar from '../components/Searchbar/SearcBar';
import BookSearchList from '../components/BookSearchList/BookSearchList';
import Wrapper from '../components/Wrapper/Wrapper';
import CardContainer from '../components/CardContainer/CardContainer';

const Home = ({displayHome}) => {
  return(
    <>
      <Wrapper>
        <Searchbar />
        <CardContainer displayHome={displayHome}>
          <BookSearchList />
        </CardContainer>
      </Wrapper>
    </>
  )
}

export default Home;