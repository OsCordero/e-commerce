import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';
const NavBar = () => {
  return (
    <nav className='nav-bar '>
      <ul className='nav-bar-items-list '>
        <li>
          <Link to='/' className='item'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/products' className='item'>
            Products
          </Link>
        </li>
        <li>
          <Link to='/categories' className='item'>
            Categories
          </Link>
        </li>
        <li className='item'>
          <Link to='/login' className='item'>
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
