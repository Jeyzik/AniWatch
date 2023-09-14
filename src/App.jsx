import React from "react";
import "./app.scss";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
function App() {
  const [item, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:3001/animeList`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  return (
    <div className="wrapper">
      <div className="wrapperContainer">
        <Header />
        <div className="content">
          <Aside />
          <Main item={item} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
