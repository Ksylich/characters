import React from "react";

import Portal from "../portal";

import "./modal.css";

interface IProps {
  isOpen: boolean;
  onGotIt: (event: any) => void;
  text: any;
}
const Modal: React.FC<IProps> = ({ isOpen, onGotIt, text }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal-overlay">
            <div className="modal-window">
              <div className="modal-header">{text.number}</div>
              <div className="modal-body">{text.type}</div>
              <div className="modal-foorter">
                {text.description}
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
