import React, { useEffect } from 'react';
import API from '../utils/api';
import Wrapper from '../components/Wrapper/Wrapper';
import { useBookContext } from '../utils/GlobalState';
import {LOADING, SAVE_BOOK} from '../utils/actions';
import FavoritesList from '../components/FavoritesList/FavoritesList';

const Favorites = () => {
  
  return(
    <>
      <Wrapper>
        <FavoritesList />
      </Wrapper>
    </>
  )
}

export default Favorites;