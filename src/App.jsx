import "./app.scss";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
function App() {
  return (
    <div className="wrapper">
      <div className="wrapperContainer">
        <Header />
        <div className="content">
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
