import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { ItemContext } from "../../App";

const Header = () => {
  const [topics, setTopics] = React.useState(0);

  const theme = [
    <FontAwesomeIcon icon={faMoon} />,
    <FontAwesomeIcon icon={faSun} />,
  ];

  const { searchValue, setSearchValue } = React.useContext(ItemContext);

  return (
    <div className="header">
      <div className="headerWrapper">
        <a href="/" className="logo">
          <div className="title">aniwatch</div>
          <div className="caption">watch anime online</div>
        </a>
        <div className="search">
          <input
            value={searchValue}
            type="text"
            placeholder="Search anime..."
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button className="searchBtn">
            {(searchValue && (
              <FontAwesomeIcon
                icon={faX}
                className="searchL"
                onClick={() => setSearchValue("")}
              />
            )) || (
              <FontAwesomeIcon icon={faMagnifyingGlass} className="searchL" />
            )}
          </button>
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
