import React from "react";
import "./style.scss";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <div>
      <img src={logo} className="main-logo" />
    </div>
  );
};

export default Header;
