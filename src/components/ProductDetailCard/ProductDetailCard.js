import React from 'react';
import './product-detail-card.scss';

const ProductDetailCard = props => {
  const { name, description, price, discounted_price } = props.product;

  return (
    <div className='product-detail-card'>
      <div className='product-detail-card-header'>{name}</div>
      <div className='product-detail-card-body'>
        <p>{description}</p>
        <div className='product-card-footer'>
          <div className='prices'>
            <p className='old-price'>{price}</p>
            <p className='discount-price'>{discounted_price}</p>
          </div>
          <div className='buttons'>
            <button className='btn success btn-detail'>+ Add to chart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
