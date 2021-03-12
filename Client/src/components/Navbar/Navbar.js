import React from 'react';

const Navbar = ({showHome, showFavorites}) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo" onClick={() => showHome()}>Book search</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#" onClick={()=>showHome()}>Home</a></li>
          <li><a href="#" onClick={()=>showFavorites()}>Favorites</a></li>
        </ul>
      </div>
      <ul className="sidenav" id="mobile">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;