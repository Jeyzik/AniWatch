import React from "react";
import "./app.scss";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
function App() {
  const [error, setError] = React.useState(null);
  const [item, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoaded(true);

    fetch(`http://localhost:3001/animeList?_page=${currentPage}&_limit=16`)
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
  }, [currentPage]);

  return (
    <div className="wrapper">
      <div className="wrapperContainer">
        <Header />
        <div className="content">
          <Aside />
          <Main item={item} setCurrentPage={setCurrentPage} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
