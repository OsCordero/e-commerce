import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.scss';
const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-message'>
        <h1>Page Not Found</h1>
        <p className='sub-title'>{"Sorry, we couldn'nt find that url :("}</p>
        <Link to='/home' className='home-to-products'>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
