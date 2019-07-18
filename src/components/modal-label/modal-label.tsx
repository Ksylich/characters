import React from "react";

import Clear from "../../assets/clear_24px.png";
import Portal from "../portal";

import "./modal-label.css";

interface IProps {
  isOpen: boolean;
  onClose: (event: any) => void;
  text: string[];
}

const ModalLabel: React.FC<IProps> = ({ isOpen, onClose, text  }) => {
  return (
    <>
      {isOpen && (
      <Portal>
        <div className="modal-label-container">
          <img src={Clear} alt="" className="clear" onClick={onClose} />
          <p>{text[0]}</p>
          <p>{text[1]}</p>
          <p>{text[2]}</p>
        </div>
      </Portal>
      )}
    </>
  );
};

export default ModalLabel;
