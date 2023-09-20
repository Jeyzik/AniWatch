import React from "react";
import "./app.scss";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./page/main/Main";
import { sortBy } from "./components/filterAnime/Filter";

export const ItemContext = React.createContext();

function App() {
  const [error, setError] = React.useState(null);
  const [item, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const [selectedGenre, setSelectedGenre] = React.useState("");
  const [sortType, setSortType] = React.useState("");

  React.useEffect(() => {
    setIsLoaded(true);

    const order = sortType.includes("(ASC)") ? "asc" : "desc";
    const sortBy = sortType.includes("(ASC)")
      ? sortType.replace("(ASC)", "")
      : sortType.replace("(DESC)", "");

    console.log();

    fetch(
      `http://localhost:3001/animeList?_page=${currentPage}&_limit=16&q=${selectedGenre}&_sort=${sortBy}&_order=${order}`
    )
      .then((res) => res.json())
      .then(
        (arr) => {
          setItems(arr);
          setIsLoaded(false);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    window.scrollTo(0, 0);
  }, [currentPage, selectedGenre, sortType]);

  return (
    <div className="wrapper">
      <div className="wrapperContainer">
        <ItemContext.Provider
          value={{
            item,
            selectedGenre,
            sortType,
            setSortType,
            setCurrentPage,
            setSelectedGenre,
          }}
        >
          <Header />
          <div className="content">
            <Aside />
            <Main />
          </div>
          <Footer />
        </ItemContext.Provider>
      </div>
    </div>
  );
}

export default App;
