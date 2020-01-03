import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/';

import ProductCard from '../../ProductCard/ProductCard';
import './products.scss';
export class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProductsList() {
    return this.props.products.map(product => {
      return <ProductCard key={product.product_id} product={product} />;
    });
  }

  render() {
    console.log(this.props.products);

    return (
      <div className='products'>
        <div className='products-header'>
          <h1>Our Signature Products:</h1>
        </div>
        <div className='search-bar'>
          <form action='' className='ui form' onSubmit={this.props}>
            <div className='glass'>&#8981;</div>
            <input className='search-input' type='text' placeholder='' />
          </form>
        </div>

        <div className='products-list'>{this.renderProductsList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts })(Products);
