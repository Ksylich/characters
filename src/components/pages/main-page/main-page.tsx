import React from "react";
import { Link } from "react-router-dom";

import "./main-page.css";

const MainPage = () => {
  return (
    <div className="body">
      <div className="logo">COOL LOGO</div>
      <div className="slogan">"not trivial slogan"</div>
      <div className="top-line" />
      <div className="first-text">
        Today I will teach you how to create a character in computer games
      </div>
      <div className="middle-line" />
      <div className="second-text">
        I'm sure you already know how but can you create a character creator?
      </div>
      <div className="bottom-line" />
      <Link className="lnk" to="/character">
        <button className="l-start-box" id="onClick">
          <div className="l-start">Lets start</div>
        </button>
      </Link>
    </div>
  );
};

export default MainPage;
