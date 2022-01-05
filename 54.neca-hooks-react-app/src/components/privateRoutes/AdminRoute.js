import React from "react";
import { Route, Redirect } from "react-router";
import AuthService from "../../services/auth.service";

const AdminRoute = ({ component: Component, handleChildFuncs, ...rest }) => {
  const user = AuthService.getCurrentUser();

  return (
    <Route
      {...rest}
      render={() =>
        user !== undefined && user.role === "admin" ? (
          <Component />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRoute;
