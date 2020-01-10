import React from 'react';
import './product-card.scss';
import { Link } from 'react-router-dom';
function renderPrices(discounted_price, price) {
  if (parseFloat(discounted_price) > 0) {
    return (
      <div className='prices'>
        <p className='discount-price'>${discounted_price}</p>
        <p className='old-price'>${price}</p>
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
const ProductCard = props => {
  const { product_id, name, price, discounted_price, thumbnail } = props.product;
  return (
    <div className='product-card'>
      <div className='product-card-body'>
        <img src={`${process.env.REACT_APP_IMAGE_URL}${thumbnail}`} alt='' className='thumbnail' />

        <Link to={`/product/${product_id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <h1 className='product-name'>{name}</h1>
        </Link>
      </div>
      <div className='product-card-footer'>
        {renderPrices(discounted_price, price)}

        <div className='buttons'>
          <Link to={`/product/${product_id}`} className='btn primary'>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
