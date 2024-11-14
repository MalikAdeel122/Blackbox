import React from "react";

const Header = () => {
  return (
    <div className="dash-header">
      <div className="wrapper app-width">
        <div className="ls">
          <div className="logo">
            <img src="/images/Logo.png"></img>
            <h1 className="logo-name">BlackBox</h1>
          </div>
        </div>
        <div className="rs"></div>
      </div>
    </div>
  );
};

export default Header;
