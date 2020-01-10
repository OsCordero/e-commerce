import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';
export const Modal = props => {
  const { title, content, actions, show } = props;

  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className={`${props.animation} ${
        show ? 'modal display-block animated' : 'modal display-none animated'
      }`}
    >
      <div onClick={e => e.stopPropagation()} className='modal-card'>
        <div className='header'>{title}</div>
        <div className='content'>{content}</div>
        <div className='actions'>{actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};
