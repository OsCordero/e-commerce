import React from 'react';
import './product-card.scss';
import { Link } from 'react-router-dom';
function renderPrices(discounted_price, price) {
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
        <p className='old-price'></p>
        <p className='discount-price'>${price}</p>
      </div>
    );
  }
}
const ProductCard = props => {
  const { product_id, name, description, price, discounted_price } = props.product;
  return (
    <div className='product-card'>
      <h1 className='product-name'>{name}</h1>
      <div className='product-card-body'>
        <p className='description'>{description}</p>
        <div className='product-card-footer'>
          {renderPrices(discounted_price, price)}

          <div className='buttons'>
            <Link to={`/product/${product_id}`} className='btn primary'>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
