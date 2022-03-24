import React from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

export default function Modal({ children, handleClose }) {
  const closeModal = () => handleClose(false);
  return createPortal(
    <div className="wrapper" onClick={closeModal}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="closeIcon" onClick={closeModal}>
          &times;
        </div>
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
}
