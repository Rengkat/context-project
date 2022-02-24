import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

// class ToggleTheme extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { toggleTheme } = this.context;
//     return (
//       <div>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//       </div>
//     );
//   }
// }
const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

// export default ToggleTheme;
export default ToggleTheme;
