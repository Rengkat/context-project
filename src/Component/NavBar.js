import React, { useContext } from "react";
import { authContex } from "./AuthenContext";
import { ThemeContext } from "../Context/ThemeContext";
// class NavBar extends Component {
//   // static contextType = ThemeContext;

//   render() {
//     return (
//       <authContex.Consumer>
//         {(authContex) => (
//           <ThemeContext.Consumer>
//             {(context) => {
//               const { isAuthenticated, toggleAuth } = authContex;
//               const { isLight, light, dark } = context;
//               const theme = isLight ? light : dark;
//               return (

//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </authContex.Consumer>
//     );
//   }
// }
const NavBar = () => {
  const { isAuthenticated, toggleAuth } = useContext(authContex);
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  return (
    <nav
      className="header"
      style={{ background: theme.bg, color: theme.textColor }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{isAuthenticated ? "Login" : "Logout"}</div>

      <ul className="main-nav">
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

// export default NavBar;
export default NavBar;
