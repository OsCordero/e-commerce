import React from 'react';
import './home.scss';
const Home = () => {
  return (
    <div className='home'>
      <h1 className='home-header'>Welcome to Home Page!</h1>
      <img
        className='home-image'
        src='https://cdn.pixabay.com/photo/2018/01/14/23/05/visa-3082813_960_720.jpg'
        alt=''
      />
    </div>
  );
};

export default Home;
