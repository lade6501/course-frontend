import React, { Children } from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showModal = show ? "modal display-block" : "modal display-none";
  return (
    <>
      <div className={showModal}>
        <section className="modal-main">
          <i
            className="fa-solid fa-xmark fa-2xl closeButton"
            onClick={handleClose}
          ></i>
          {children}
        </section>
      </div>
    </>
  );
};

export default Modal;
