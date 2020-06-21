import React from "react";
import "./style.scss";

import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
