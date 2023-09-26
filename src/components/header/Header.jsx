import React from "react";
import debounce from "lodash.debounce";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [topics, setTopics] = React.useState(0);
  const [value, setValue] = React.useState("");

  // Redux Toolkit
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    // dispatch(setSearchValue(event.target.value));
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setValue("");
    dispatch(setSearchValue(""));
  };

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
          <input
            value={value}
            type="text"
            placeholder="Search anime..."
            onChange={onChangeInput}
          />
          <button className="searchBtn">
            {(value && (
              <FontAwesomeIcon
                icon={faX}
                className="searchL"
                onClick={onClickClear}
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
