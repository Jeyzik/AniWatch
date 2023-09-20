import React from "react";
import "./animePosters.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const AnimePosters = ({ img, series, name, date, geners }) => {
  return (
    <div className="posters">
      <div className="postersContent">
        <a href="#" className="postersLink">
          <div className="postersImg">
            <img src={img} alt="anime-poster" />
            <div className="posterInfo"></div>
            <div className="posterSeries">
              <FontAwesomeIcon icon={faArrowRight} />
              <span>{series} series</span>
            </div>
            <div className="posterTrailer">New Item</div>
            <div className="hoverOverlay">
              <div className="playContainer">
                <FontAwesomeIcon icon={faCirclePlay} className="playButton" />
              </div>
              <span className="hoverSeries">{series}</span>
            </div>
          </div>
          <div className="posterDesc">
            <h3>{name}</h3>
            <div className="posterSubtitle">
              {date} {geners}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AnimePosters;
