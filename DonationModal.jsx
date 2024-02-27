import React from 'react';
import './styles/Modal.css';

const Modal = ({ showModal, closeModal, children }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`} onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
