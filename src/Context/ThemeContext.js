import React, { createContext, Component } from "react";

export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isLight: true,
    light: { textColor: "#000", ui: "#ddd", bg: "#d3d3d3" },
    dark: { textColor: "#eee", ui: "#333", bg: "#000" },
  };
  toggleTheme = () => {
    this.setState({ isLight: !this.state.isLight });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
