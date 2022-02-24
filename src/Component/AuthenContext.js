import React, { Component, createContext } from "react";
export const authContex = createContext();

class AuthContextProvider extends Component {
  state = { isAuthenticated: true };
  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    return (
      <authContex.Provider
        value={{
          ...this.state,
          toggleAuth: this.toggleAuth,
        }}>
        {this.props.children}
      </authContex.Provider>
    );
  }
}

export default AuthContextProvider;
