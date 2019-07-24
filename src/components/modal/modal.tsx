import React from "react";

import { connect } from "react-redux";

import { ChState } from "../../redux/store";
import Portal from "../portal";

import "./modal.css";

interface IProps {
  isOpen: boolean;
  onGotIt: (event: any) => void;
  text: any;
  theme: string;
}
const Modal: React.FC<IProps> = ({ isOpen, onGotIt, text, theme }) => {
  const style = {
    backgroundColor: theme,
  };
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal-overlay">
            <div className="modal-window" style={style}>
              <div className="modal-header">{text.number}</div>
              <div className="modal-body">{text.type}</div>
              <div className="modal-foorter">
                {text.description}
              </div>
              <div className="got-btn-container" id="onClick" onClick={onGotIt}>
                <div className="got-btn">Got it</div>{" "}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

const mapStateToProps = ({ theme }: ChState) => ({
  theme,
});

export default connect(
  mapStateToProps,
)(Modal);
