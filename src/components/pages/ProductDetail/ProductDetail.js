import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../../actions/';
import { fetchProductReviews } from '../../../actions/';

import ProductDetailCard from '../../ProductDetailCard/ProductDetailCard';
import Review from '../../Review/Review';
import './product-detail.scss';
import Spinner from './../../Spinner/Spinner';

export class ProductDetail extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    this.props.fetchProductReviews(this.props.match.params.id);
  }

  renderReviewsList() {
    return this.props.reviews.map((review, index) => {
      return <Review key={index} review={review}></Review>;
    });
  }
  render() {
    const { product, loading } = this.props;

    return (
      <div className='product-detail'>
        {loading && <Spinner />}
        <div className='product-resume'>
          <ProductDetailCard
            product={product}
            price={
              parseFloat(product.discounted_price) > 0 ? product.discounted_price : product.price
            }
          />
        </div>
        <div className='product-reviews'>{this.renderReviewsList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.selected,
    reviews: state.products.selectedReviews,
    loading: state.cart.addingProducts,
  };
};

export default connect(mapStateToProps, { fetchProduct, fetchProductReviews })(ProductDetail);
