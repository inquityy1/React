import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";

import "./header.css";

const Header = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.href = "/";
  };

  return (
    <div className="header-container">
      <h2>Neca's Shop</h2>
      {user ? (
        <button className="btn btn-primary" onClick={logOut}>
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Header;
