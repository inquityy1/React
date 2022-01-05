import React from "react";
import { Route, Redirect } from "react-router";
import AuthService from "../../services/auth.service";

const UserRoute = ({ component: Component, handleChildFuncs, ...rest }) => {
  const user = AuthService.getCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        user !== undefined && user.role === "user" ? (
          <Component />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default UserRoute;
