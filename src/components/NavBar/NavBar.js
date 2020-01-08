import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navbar.scss';
import GoogleAuth from './../GoogleAuth/GoogleAuth';
class NavBar extends React.Component {
  render() {
    return (
      <nav className='nav-bar '>
        {this.props.isSignedIn && (
          <div className='cart-button'>
            <Link to='/cart' className='item' onClick={this.onCartClick}>
              <i className='fa fa-shopping-cart'></i>
              <span className='badge badge-warning' id='lblCartCount'>
                {this.props.itemsCount}
              </span>
            </Link>
          </div>
        )}

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
            <GoogleAuth />
          </li>
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    itemsCount: state.cart.count,
    cart_id: state.cart.cart_id,
  };
};
export default connect(mapStateToProps)(NavBar);
