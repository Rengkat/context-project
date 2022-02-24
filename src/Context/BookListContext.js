import React, { createContext, useState } from "react";
export const BookListContext = createContext();
const BookListContextProvider = (props) => {
  const [creatBooks, setCreateBooks] = useState([
    { title: "48 Laws of Power", id: 1 },
    { title: "Imitation is Limitation", id: 2 },
    { title: "Swalow the Frog", id: 3 },
    { title: "When Men fall Asleep", id: 4 },
  ]);
  return (
    <BookListContext.Provider value={{ creatBooks }}>
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookListContextProvider;
