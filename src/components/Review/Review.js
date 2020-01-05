import React from 'react';
import { formatDate } from '../../helpers/dateFormatHandler';
import './review.scss';

function getFormatedDate(created_on) {
  return formatDate(created_on);
}

const Review = props => {
  const { review, name, created_on } = props.review;
  return (
    <div className='review'>
      <div className='review-body'>{review}</div>
      <div className='review-footer'>
        <div className='review-user'>
          <span>User:</span> {name}
        </div>
        <div className='review-date'>{getFormatedDate(created_on)}</div>
      </div>
    </div>
  );
};

export default Review;
