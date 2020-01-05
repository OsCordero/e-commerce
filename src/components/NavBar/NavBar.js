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
          <a href='#'>Log in </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
