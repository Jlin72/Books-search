import React, { useEffect } from 'react';
import API from '../utils/api';
import Navbar from '../components/Navbar/Navbar';
import { useBookContext } from '../utils/GlobalState';
import {LOADING, SAVE_BOOK} from '../utils/actions';
import FavoritesList from '../components/FavoritesList/FavoritesList';

const Favorites = () => {
  
  return(
    <>
      <Navbar />
      <FavoritesList />
    </>
  )
}

export default Favorites;