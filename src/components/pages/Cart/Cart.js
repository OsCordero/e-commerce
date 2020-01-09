import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart, removeProductFromCart, emptyCart } from '../../../actions';
import createHistory from 'history/createBrowserHistory';
import './cart.scss';
import ProductDetailCard from './../../ProductDetailCard/ProductDetailCard';
import { Modal } from '../../Modal/Modal';
import Spinner from './../../Spinner/Spinner';

export class Cart extends Component {
  state = { modal: { show: false, type: '' }, selectedItem: '' };
  componentDidMount() {
    this.props.fetchCart(this.props.cart_id);
  }

  renderProducts(products) {
    return products.map(product => (
      <div className='cart-row' key={product.product_id}>
        <ProductDetailCard
          key={product.product_id}
          product={product}
          price={
            parseFloat(product.discounted_price) > 0 ? product.discounted_price : product.price
          }
        />

        <label className='container-check'>
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <button
          className='delete btn'
          value={product.product_id}
          onClick={() =>
            this.setState({
              modal: { show: true, type: 'item' },
              selectedItem: product.item_id,
            })
          }
        >
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
    ));
  }

  onClickdeleteProduct = cart_id => {
    const item_id = this.state.selectedItem;
    this.props.removeProductFromCart(item_id, cart_id);
    this.setState({ modal: { show: false } });
  };

  onClickEmptyCart = cart_id => {
    this.props.emptyCart(cart_id);
    this.setState({ modal: { show: false } });
  };

  renderModal() {}
  render() {
    const { loading, loadingDel, cart_id, products, count } = this.props;
    return (
      <div className='cart'>
        <Modal
          actions={
            <React.Fragment>
              <button
                className='btn delete-item'
                onClick={() =>
                  this.state.modal.type === 'item'
                    ? this.onClickdeleteProduct(cart_id)
                    : this.onClickEmptyCart(cart_id)
                }
              >
                Delete
              </button>
              <button className='btn' onClick={() => this.setState({ modal: { show: false } })}>
                Cancel
              </button>
            </React.Fragment>
          }
          show={this.state.modal.show}
          title='Delete product'
          content='This action will remove this item from your shopping cart.'
        />
        {(loading || loadingDel) && <Spinner />}
        <div className='cart-card'>
          <div className='header'>
            <h1>Shopping Cart ({count})</h1>
            <button
              className='delete-all btn'
              onClick={() => this.setState({ modal: { show: true, type: 'cart' } })}
            >
              Remove all items <i className='fas fa-trash-alt'></i>
            </button>
          </div>
          <div className='cart-body'>
            <div className='cart-products-list'>{this.renderProducts(products)}</div>
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
    count: state.cart.count,
    products: state.cart.items,
    loading: state.cart.addingProducts,
    loadingDel: state.cart.removingProducts,
    total: state.cart.totalAmount,
  };
};
export default connect(mapStateToProps, { fetchCart, removeProductFromCart, emptyCart })(Cart);
