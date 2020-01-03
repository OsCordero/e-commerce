import React from 'react';
import './category-card.scss';
const CategoryCard = props => {
  console.log(props);
  const { name, description } = props.category;
  return (
    <div className='category-card'>
      <div className='category-card-header'>
        <h1>{name}</h1>
        <span>▼</span>
      </div>
      <div className='category-card-body'>{description}</div>
    </div>
  );
};

export default CategoryCard;
