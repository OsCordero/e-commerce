import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
const Home = () => {
  return (
    <div className='home-container'>
      <div className='home'>
        <h1 className='home-head'>Applaudo Clothing Store</h1>
        <p className='home-subhead'>Best Place to Dress</p>
        <p className='start-button'>
          <Link to='/products' className='home-to-products' style={{ textDecoration: 'none' }}>
            See Products
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
