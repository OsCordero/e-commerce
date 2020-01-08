import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../../../actions';
import './cart.scss';
import ProductDetailCard from './../../ProductDetailCard/ProductDetailCard';
export class Cart extends Component {
  componentDidMount() {
    this.props.fetchCart(this.props.cart_id);
  }

  renderProducts() {
    const { products } = this.props;
    return products.map(product => (
      <div className='cart-row' key={product.product_id}>
        <ProductDetailCard
          key={product.product_id}
          product={product}
          quantity={5}
          price={
            parseFloat(product.discounted_price) > 0 ? product.discounted_price : product.price
          }
        />
        <label className='container-check'>
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <div className='delete'>
          <i className='fas fa-trash-alt'></i>
        </div>
      </div>
    ));
  }
  render() {
    console.log(this.props);

    return (
      <div className='cart'>
        <div className='cart-card'>
          <div className='header'>
            <h1>Shopping Cart (3)</h1>
          </div>
          <div className='body'>
            <div className='cart-products-list'>{this.renderProducts()}</div>
          </div>
        </div>
        <div className='summary'>
          <div className='header'>
            <h1>Order Summary</h1>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart_id: state.cart.cart_id,
    products: state.cart.items,
    loading: state.cart.addingProducts,
  };
};
export default connect(mapStateToProps, { fetchCart })(Cart);
