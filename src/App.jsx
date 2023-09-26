import React from "react";
import "./app.scss";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./page/main/Main";
import { useDispatch, useSelector } from "react-redux";

export const ItemContext = React.createContext();

function App() {
  const [error, setError] = React.useState(null);
  const [item, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  // Redux Toolkit
  const selectedGenre = useSelector((state) => state.filter.selectedGenre);
  const sortType = useSelector((state) => state.filter.sortType);
  const searchValue = useSelector((state) => state.filter.searchValue);

  React.useEffect(() => {
    setIsLoaded(true);

    const order = sortType.includes("(ASC)") ? "asc" : "desc";
    const sortBy = sortType.includes("(ASC)")
      ? sortType.replace("(ASC)", "")
      : sortType.replace("(DESC)", "");

    const search = searchValue ? `q=${searchValue}` : "";
    const ganreSelected = selectedGenre ? `q=${selectedGenre}` : "";
    fetch(
      `http://localhost:3001/animeList?_page=${currentPage}&_limit=16&${ganreSelected}&_sort=${sortBy}&_order=${order}&${search}`
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedGenre, sortType, searchValue]);

  return (
    <div className="wrapper">
      <div className="wrapperContainer">
        <ItemContext.Provider
          value={{
            item,
            setCurrentPage,
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
