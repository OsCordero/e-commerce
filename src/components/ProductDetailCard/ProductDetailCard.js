import React from 'react';
import './product-detail-card.scss';
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
const ProductDetailCard = props => {
  const { name, description, price, discounted_price } = props.product;

  return (
    <div className='product-detail-card'>
      <div className='product-detail-card-header'>{name}</div>
      <div className='product-detail-card-body'>
        <p>{description}</p>
        <div className='product-card-footer'>
          {renderPrices(discounted_price, price)}
          <div className='buttons'>
            <button className='btn success btn-detail'>+ Add to chart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
