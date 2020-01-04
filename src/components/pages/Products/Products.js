import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/';
import { fetchFilteredProducts } from '../../../actions/';

import ProductCard from '../../ProductCard/ProductCard';
import './products.scss';
export class Products extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProductsList() {
    if (this.props.products.length > 0) {
      return (
        <div className='products-list'>
          {this.props.products.map(product => {
            return <ProductCard key={product.product_id} product={product} />;
          })}
        </div>
      );
    } else {
      return <h1 className='no-match'>No products match the search keyword</h1>;
    }
  }

  onSearchProduct(e) {
    e.preventDefault();
    if (this.inputRef.current.value === '') {
      this.props.fetchProducts();
    } else {
      this.props.fetchFilteredProducts(this.inputRef.current.value);
    }
  }

  render() {
    return (
      <div className='products'>
        <div className='products-header'>
          <h1>Our Signature Products:</h1>
        </div>
        <div className='search-bar'>
          <form action='' className='' onSubmit={e => this.onSearchProduct(e)}>
            <div className='glass'>&#8981;</div>
            <input
              ref={this.inputRef}
              className='search-input'
              type='text'
              placeholder='Search'
              // onChange={e => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
        <div className='products-content'>{this.renderProductsList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { products: state.products.list };
};

export default connect(mapStateToProps, { fetchProducts, fetchFilteredProducts })(Products);
