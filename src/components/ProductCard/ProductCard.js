import React from 'react';
import './product-card.scss';
const ProductCard = props => {
  const { name, description, price, discounted_price } = props.product;
  return (
    <div className='product-card'>
      <h1 className='product-name'>{name}</h1>
      <div className='product-card-body'>
        <p className='description'>{description}</p>
        <div className='product-card-footer'>
          <div className='prices'>
            <p className='old-price'>{price}</p>
            <p className='discount-price'>{discounted_price}</p>
          </div>
          <div className='buttons'>
            <button className='btn primary'>Details</button>
            <button className='btn success'>Add to chart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
