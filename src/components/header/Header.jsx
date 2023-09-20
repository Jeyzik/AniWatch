import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [topics, setTopics] = React.useState(0);

  const theme = [
    <FontAwesomeIcon icon={faMoon} />,
    <FontAwesomeIcon icon={faSun} />,
  ];

  return (
    <div className="header">
      <div className="headerWrapper">
        <a href="/" className="logo">
          <div className="title">aniwatch</div>
          <div className="caption">watch anime online</div>
        </a>
        <div className="search">
          <form action="#">
            <input type="text" placeholder="Search anime..." />
            <button className="searchBtn">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="searchL" />
            </button>
          </form>
        </div>
        <div className="themToggle">
          <ul className="toggleMenu">
            {theme.map((value, i) => (
              <li
                className={topics == i ? "active" : ""}
                key={i}
                onClick={() => setTopics(i)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="notification">
          <FontAwesomeIcon
            icon={faBell}
            className="bellIcon"
            style={{ color: "rgba(255, 255, 255, 0.66)" }}
          />
          <span className="notificationCounter">0</span>
        </div>
        <div className="discord">
          <a
            href="https://discord.gg/hQ9HaFs9q9"
            target="_blank"
            className="disAction dis"
          ></a>
        </div>
        <div className="login">
          <FontAwesomeIcon icon={faLock} className="lockIcon" />
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
