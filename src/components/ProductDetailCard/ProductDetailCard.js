import React from 'react';

import { addProductToCart } from '../../actions';
import './product-detail-card.scss';
import { connect } from 'react-redux';

class ProductDetailCard extends React.Component {
  state = { quantity: 0, price: 0.0, total: 0.0 };

  onQuantityClick(type) {
    const quantity = this.state.quantity;
    this.setState(prevState => {
      if (prevState.quantity > 0) {
        return {
          quantity: type == 'add' ? prevState.quantity + 1 : prevState.quantity - 1,
        };
      } else {
        return {
          quantity: type == 'add' ? prevState.quantity + 1 : prevState.quantity,
        };
      }
    });
    this.setState({ total: (this.props.price * this.state.quantity).toFixed(2) });
  }

  onAddToCartClick = (cart_id, product_id, quantity) => {
    this.props.addProductToCart(cart_id, product_id, quantity);
  };

  renderPrices(discounted_price, price) {
    if (parseFloat(discounted_price) > 0) {
      return (
        <div className='prices'>
          <p className='old-price'>${price}</p>
          <p className='discount-price'>${discounted_price}</p>
        </div>
      );
    } else {
      return (
        <div className='prices'>
          <p className='discount-price'>${price}</p>
        </div>
      );
    }
  }

  renderAddButton(product_id) {
    return (
      <button
        className='btn success btn-detail'
        disabled={this.props.loading}
        onClick={() => this.onAddToCartClick(this.props.cart_id, product_id, this.state.quantity)}
      >
        {this.props.loading ? (
          <React.Fragment>
            <i className='fas fa-loading'></i> Loading...
          </React.Fragment>
        ) : (
          <React.Fragment>
            <i className='fas fa-plus'></i> Add to cart
          </React.Fragment>
        )}
      </button>
    );
  }
  componentDidMount() {
    if (this.props.product.quantity) {
      this.setState({ quantity: this.props.product.quantity });
    }
  }

  render() {
    const { name, description, price, discounted_price, product_id } = this.props.product;
    return (
      <div className='product-detail-card'>
        <div className='product-detail-card-header'>{name}</div>
        <div className='product-detail-card-body'>
          <p>{description}</p>
          {this.renderPrices(discounted_price, price)}
        </div>
        <div className='product-card-footer'>
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
    );
  }
}

const mapStateToProps = state => {
  return { cart_id: state.cart.cart_id, loading: state.cart.addingProducts };
};
export default connect(mapStateToProps, { addProductToCart })(ProductDetailCard);
