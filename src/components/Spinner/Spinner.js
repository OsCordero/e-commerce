import React from 'react';
import './spinner.scss';
export default function Spinner(props) {
  return (
    <div className='spinner-container'>
      <div className='spinner'></div>
      <div className='div'>{props.message}</div>
    </div>
  );
}

Spinner.defaultProps = {
  message: 'Loading...',
};
