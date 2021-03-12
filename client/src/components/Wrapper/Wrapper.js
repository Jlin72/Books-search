import React from 'react';

const Wrapper = ({children}) => {
  return (
    <article className='container'>
      {children}
    </article>
  )
}

export default Wrapper;