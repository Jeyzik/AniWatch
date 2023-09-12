import React from "react";
import "./filter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel">
              <span className="labelCount">0</span>
              <span className="labelInfo">Genres</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel">
              <span className="labelCount">0</span>
              <span className="labelInfo">Genres</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel">
              <span className="labelCount">0</span>
              <span className="labelInfo">Genres</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel">
              <span className="labelCount">0</span>
              <span className="labelInfo">Genres</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="filterSelect">
            <div className="selectLabel">
              <span className="labelCount">0</span>
              <span className="labelInfo">Genres</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filterBlock">
        <div className="filterContent">
          <div className="btnClear">
            <button>
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
