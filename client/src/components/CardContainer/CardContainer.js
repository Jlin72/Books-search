import React from 'react';
import './style.css'

const CardContainer = ({children, displayHome}) => {

  return(
    <div className="card">
      {displayHome ? <h3 className='cardTitle'>Results</h3> : <h3 className="cardTitle">Favorites</h3>}
      <div className='card-content'>
        {children}
      </div>
    </div>
  )
}

export default CardContainer;