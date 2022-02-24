import React, { Component, useContext } from "react";
import { BookListContext } from "../Context/BookListContext";
import { ThemeContext } from "../Context/ThemeContext";

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLight, light, dark } = this.context;

//     return (
//       <div className="book-list">
//         <ul>
//           <li style={{ background: theme.ui, color: theme.textColor }}>
//             48 Laws of power
//           </li>
//           <li style={{ background: theme.ui, color: theme.textColor }}>
//             Swalow the frog
//           </li>
//           <li style={{ background: theme.ui, color: theme.textColor }}>
//             Imitation is limitation
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
const BookList = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const { creatBooks } = useContext(BookListContext);
  return (
    <div className="book-list">
      <ul>
        {creatBooks.map((book) => {
          return (
            <li
              key={book.id}
              style={{ background: theme.ui, color: theme.textColor }}>
              {book.title}
            </li>
          );
        })}
        {/* <li style={{ background: theme.ui, color: theme.textColor }}>
          48 Laws of power
        </li>
        <li style={{ background: theme.ui, color: theme.textColor }}>
          Swalow the frog
        </li>
        <li style={{ background: theme.ui, color: theme.textColor }}>
          Imitation is limitation
        </li> */}
      </ul>
    </div>
  );
};

// export default BookList;

export default BookList;
