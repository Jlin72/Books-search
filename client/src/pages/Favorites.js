import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import CardContainer from '../components/CardContainer/CardContainer';

const Favorites = ({displayHome}) => {
  
  return(
    <>
      <Wrapper>
        <CardContainer displayHome={displayHome}>
          <FavoritesList />
        </CardContainer>
      </Wrapper>
    </>
  )
}

export default Favorites;