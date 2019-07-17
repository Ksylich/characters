import React from "react";

import Portal from "../portal";

import "./modal.css";

interface IProps {
  isOpen: boolean;
  onGotIt: (event: any) => void;
}

const Modal: React.FC<IProps> = ({ isOpen, onGotIt }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal-overlay">
            <div className="modal-window">
              <div className="modal-header">The first:</div>
              <div className="modal-body">Race</div>
              <div className="modal-foorter">
                Everyone is crazy about it now...
              </div>
              <div className="got-btn-container" onClick={onGotIt}>
                <div className="got-btn">Got it</div>{" "}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
