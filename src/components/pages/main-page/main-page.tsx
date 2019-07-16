import React from "react";

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
      <div className="middle-line"></div>
      <div className="second-text">I'm sure you already know how but can you create a character creator?</div>
      <div className="bottom-line"></div>
      <button className="l-start-box">
          <div className="l-start">Lets start</div>
      </button>
    </div>

  );
};

export default MainPage;