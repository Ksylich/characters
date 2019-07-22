import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { changeOperationType } from "../../../redux/actions";

import "./last-page.css";

interface IProps {
  changeOperationTypeAction: typeof changeOperationType;
}

const LastPage: React.FC<IProps> = ({ changeOperationTypeAction }) => {

  const callbackF = useCallback(() => changeOperationTypeAction("race"), []);

  return (
    <div className="body">
      <div className="logo">COOL LOGO</div>
      <div className="top-line-last" />
      <div className="last-content-container">
       <ul className="last-content">
           <li className="bold">Well done!</li>
           <li>Think of a nickname</li>
           <li>Keep it in your mind</li>
           <li>Oh, I almost forgot... to start playing - contact Kiy ;)</li>
       </ul>
      </div>
      <div className="bottom-line-last" />
      <Link className="lnk" to="/">
        <button className="l-start-box" id="lst" onClick={callbackF}>
          <div className="l-start">Go again</div>
        </button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = {
  changeOperationTypeAction: changeOperationType,
};

export default connect(null, mapDispatchToProps)(LastPage);
