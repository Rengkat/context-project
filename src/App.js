import AuthContextProvider from "./Component/AuthenContext";
import BookList from "./Component/BookList";
import NavBar from "./Component/NavBar";
import ToggleTheme from "./Component/ToggleTheme";
import BookListContextProvider from "./Context/BookListContext";
import ThemeContextProvider from "./Context/ThemeContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar></NavBar>
          <BookListContextProvider>
            <BookList />
          </BookListContextProvider>
        </AuthContextProvider>
        <ToggleTheme></ToggleTheme>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
