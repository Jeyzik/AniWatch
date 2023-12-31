import React from "react";
import "./app.scss";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./page/main/Main";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "./redux/slices/filterSlice";
import { sortBy } from "./components/filterAnime/Filter";
import { initialState } from "./redux/slices/filterSlice";

export const ItemContext = React.createContext();

function App() {
  const [error, setError] = React.useState(null);
  const [item, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  // Redux Toolkit
  const selectedGenre = useSelector((state) => state.filter.selectedGenre);
  const sortType = useSelector((state) => state.filter.sortType);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const currentPage = useSelector((state) => state.filter.currentPage);

  const fetchPizzas = () => {
    setIsLoaded(true);

    const order = sortType.includes("(ASC)") ? "asc" : "desc";
    const sortBy = sortType.includes("(ASC)")
      ? sortType.replace("(ASC)", "")
      : sortType.replace("(DESC)", "");

    const search = searchValue ? `q=${searchValue}` : "";
    const ganreSelected = selectedGenre ? `q=${selectedGenre}` : "";

    axios
      .get(
        `http://localhost:3001/animeList?_page=${currentPage}&_limit=16&${ganreSelected}&_sort=${sortBy}&_order=${order}&${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoaded(false);
      });
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        currentPage,
        selectedGenre,
        sortType,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [currentPage, selectedGenre, sortType]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortBy.find((obj) => obj.sortProprty === params.sortProprty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      // isSearch.current(true);
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedGenre, sortType, searchValue]);

  return (
    <div className="wrapper">
      <div className="wrapperContainer">
        <ItemContext.Provider
          value={{
            item,
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
