import React from 'react';

import { addProductToCart } from '../../actions';
import './product-detail-card.scss';
import { connect } from 'react-redux';
import { fetchCart } from './../../actions/index';

class ProductDetailCard extends React.Component {
  state = { quantity: 0, price: 0.0, total: 0.0 };

  async onQuantityClick(type) {
    let quantity = this.state.quantity;
    quantity = type === 'add' ? quantity + 1 : quantity > 0 ? quantity - 1 : 0;
    this.setState({ quantity }, () => {
      this.setState({ total: (this.props.price * this.state.quantity).toFixed(2) });
    });
  }

  onAddToCartClick = (cart_id, product_id, quantity) => {
    this.props.addProductToCart(cart_id, product_id, quantity);
  };

  renderPrices(discounted_price, price) {
    if (parseFloat(discounted_price) > 0) {
      return (
        <div className='prices'>
          <p className='old-price'>${price}</p>
          <p className='discount-price'>US ${discounted_price}</p>
        </div>
      );
    } else {
      return (
        <div className='prices'>
          <p className='discount-price'>US ${price}</p>
        </div>
      );
    }
  }

  renderAddButton(product_id) {
    const { loading, cart_id } = this.props;
    const disabled = loading ? 'disabled' : '';
    return (
      <button
        className={`btn success btn-detail ${disabled}`}
        disabled={loading}
        onClick={() => {
          this.onAddToCartClick(cart_id, product_id, this.state.quantity);
          if (this.props.product.quantity) {
            this.props.fetchCart(cart_id);
          }
        }}
      >
        <i className='fas fa-plus'></i> Add to cart
      </button>
    );
  }
  componentDidMount() {
    if (this.props.product.quantity) {
      this.setState({ quantity: this.props.product.quantity }, () => {
        this.setState({ total: (this.state.quantity * this.props.price).toFixed(2) });
      });
    }
  }

  render() {
    const { name, description, price, discounted_price, product_id, image } = this.props.product;
    return (
      <div className='product-detail-card'>
        <div className='product-detail-card-header'>{name}</div>
        <div className='product-detail-content'>
          <div className='product-detail-card-body'>
            <img src={`${process.env.REACT_APP_IMAGE_URL}${image}`} alt='' className='thumbnail' />
            <p>{description}</p>
          </div>
          <div className='product-card-footer'>
            {this.renderPrices(discounted_price, price)}
            <div className='total'>Total: {this.state.total}</div>
            <div className='buttons'>
              <div className='quantity-buttons'>
                <button onClick={() => this.onQuantityClick('sub')} className='btn'>
                  -
                </button>
                <label>{this.state.quantity}</label>
                <button onClick={() => this.onQuantityClick('add')} className='btn'>
                  +
                </button>
              </div>
              {this.renderAddButton(product_id)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cart_id: state.cart.cart_id, loading: state.cart.addingProducts };
};
export default connect(mapStateToProps, { addProductToCart, fetchCart })(ProductDetailCard);
