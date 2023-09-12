import React from "react";
import "./animePosters.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const AnimePosters = () => {
  return (
    <div className="posters">
      <div className="postersContent">
        <a href="#" className="postersLink">
          <div className="postersImg">
            <img src="./img/animePoster.jpg" alt="anime-poster" />
            <div className="posterInfo"></div>
            <div className="posterSeries">
              <FontAwesomeIcon icon={faArrowRight} />
              <span>6 series</span>
            </div>
            <div className="posterTrailer">New Item</div>
            <div className="hoverOverlay">
              <div className="playContainer">
                <FontAwesomeIcon icon={faCirclePlay} className="playButton" />
              </div>
              <span className="hoverSeries">6</span>
            </div>
          </div>
          <div className="posterDesc">
            <h3>Jujutsu Kaisen</h3>
            <div className="posterSubtitle">
              2020 Demons, Supernatural, Shounen, Horror, Fantasy, School,
              Action
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AnimePosters;
