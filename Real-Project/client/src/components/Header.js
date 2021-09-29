import React from "react";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <h3 className="right item">ADMIN DASHBOARD</h3>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
