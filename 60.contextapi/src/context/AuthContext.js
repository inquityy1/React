import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    isLogedIn: false,
  };

  changeAuthStatus = () => {
    this.setState({ isLogedIn: !this.isLogedIn });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
