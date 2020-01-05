import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/';
import { fetchFilteredProducts } from '../../../actions/';
import { fetchSearchedProducts } from '../../../actions/';
import { fetchCategories } from '../../../actions/';

import ProductCard from '../../ProductCard/ProductCard';
import './products.scss';
export class Products extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
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

  renderCategoriesSelect() {
    return this.props.categories.map(category => (
      <option key={category.category_id} value={category.category_id}>
        {category.name}
      </option>
    ));
  }

  onSearchProduct(e) {
    e.preventDefault();
    if (this.inputRef.current.value === '') {
      this.props.fetchProducts();
    } else {
      this.props.fetchSearchedProducts(this.inputRef.current.value);
    }
  }

  onChangeCategorieFilter(e) {
    if (e.target.value !== '') {
      this.props.fetchFilteredProducts(e.target.value);
    }
  }

  render() {
    return (
      <div className='products'>
        <div className='products-header'>
          <h1>Our Signature Products:</h1>
        </div>
        <div className='search-bar'>
          <form action='' className='filter-search-form' onSubmit={e => this.onSearchProduct(e)}>
            <div className='glass'>&#8981;</div>
            <input
              ref={this.inputRef}
              className='search-input'
              type='text'
              placeholder='Search'
              // onChange={e => this.setState({ term: e.target.value })}
            />
            <select
              name='categories'
              className='filter-categories'
              id=''
              onChange={e => {
                this.onChangeCategorieFilter(e);
              }}
            >
              <option value=''>Filter by category</option>
              {this.renderCategoriesSelect()}
            </select>
          </form>
        </div>
        <div className='products-content'>{this.renderProductsList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { products: state.products.list, categories: state.categories };
};

export default connect(mapStateToProps, {
  fetchProducts,
  fetchSearchedProducts,
  fetchFilteredProducts,
  fetchCategories,
})(Products);
