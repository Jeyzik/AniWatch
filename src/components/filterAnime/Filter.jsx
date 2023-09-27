import React from "react";
import "./filter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { setSelectedGenre, setSortType } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export const sortBy = [
  { name: "date(DESC)", sortProprty: "date" },
  { name: "date(ASC)", sortProprty: "-date" },
  { name: "series(DESC)", sortProprty: "-series" },
  { name: "series(ASC)", sortProprty: "-series" },
];

export const geners = [
  { id: 10, genres: "Demons" },
  { id: 11, genres: "Supernatural" },
  { id: 12, genres: "Shounen" },
  { id: 13, genres: "Action" },
  { id: 14, genres: "Fantasy" },
  { id: 15, genres: "Samurai" },
  { id: 16, genres: "School" },
  { id: 17, genres: "Sci-Fi" },
  { id: 18, genres: "Romance" },
  { id: 19, genres: "Magic" },
  { id: 20, genres: "SuperPower" },
  { id: 21, genres: "Adventure" },
  { id: 22, genres: "Comedy" },
  { id: 23, genres: "Detective" },
  { id: 24, genres: "Historical" },
  { id: 25, genres: "Drama" },
  { id: 26, genres: "Vampires" },
  { id: 27, genres: "Military" },
  { id: 28, genres: "Music" },
  { id: 29, genres: "Harem" },
  { id: 30, genres: "Games" },
  { id: 31, genres: "EverydayLife" },
  { id: 32, genres: "Horror" },
];
const Filter = ({ onClickGenres, onClickSortBy }) => {
  // Redux Toolkit
  const selectedGenre = useSelector((state) => state.filter.selectedGenre);
  const sortType = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [openSort, setOpenSort] = React.useState(false);

  return (
    <div className="filter">
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel" onClick={() => setOpen(!open)}>
              <span className="labelInfo">
                {(selectedGenre ? "" : "Genres") ? "Genres" : selectedGenre}
              </span>
            </div>
            {open && (
              <div className="selectDropdown">
                <div className="dropdownInner">
                  <ul className="dropdownGroup">
                    {geners.map((genersName) => (
                      <li
                        className={
                          selectedGenre === genersName.genres
                            ? "active"
                            : "dropdownOption"
                        }
                        datakey={genersName.id}
                        key={genersName.id}
                        onClick={() => {
                          onClickGenres(genersName.genres);
                          setOpen(false);
                        }}
                      >
                        {genersName.genres}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel">
              <span className="labelInfo">Chapter</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel">
              <span className="labelInfo">Year</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel">
              <span className="labelInfo">Exclude</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel" onClick={() => setOpenSort(!openSort)}>
              <span className="labelInfo">
                {(sortType ? "" : "Sort by") ? "Sort by" : sortType}
              </span>
            </div>
            {openSort && (
              <div className="selectDropdown">
                <div className="dropdownInner">
                  <ul className="dropdownGroup">
                    {sortBy.map((value, i) => (
                      <li
                        className={
                          sortType === value.name ? "active" : "dropdownOption"
                        }
                        key={i}
                        onClick={() => {
                          onClickSortBy(value.name);
                          setOpenSort(false);
                        }}
                      >
                        {value.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="btnClear">
            <button
              onClick={() => {
                dispatch(setSelectedGenre(""));
                dispatch(setSortType(""));
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
