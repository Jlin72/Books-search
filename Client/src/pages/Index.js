import React, { useState } from 'react';
import Home from './Home';
import Favorites from './Favorites';
import Navbar from '../components/Navbar/Navbar';

const Index = () => {
  const [displayHome, setShowHome] = useState(true);
  const [displayFavorites, setShowFavorites] = useState(false);

  const showHome = () => {
    setShowHome(true);
    setShowFavorites(false);
  }

  const showFavorites = () => {
    setShowFavorites(true);
    setShowHome(false);
  }

  const renderIndex = () => {
    if(displayHome) {
      return <Home />
    } else if (displayFavorites) {
      return <Favorites />
    }
  }

  return(
    <>
    <Navbar showHome={showHome} showFavorites={showFavorites} />
    {renderIndex()}
    </>
  )
}

export default Index;