import React from "react";
import "./newAnimePosters.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const NewAnimePosters = () => {
  return (
    <div className="newPosters">
      <div className="postersContent">
        <a href="#" className="postersLink">
          <div className="postersImg">
            <img src="./img/animePoster.jpg" alt="anime-poster" />
            <div className="posterInfo"></div>
            <div className="hoverOverlay">
              <div className="playContainer">
                <FontAwesomeIcon icon={faCirclePlay} className="playButton" />
              </div>
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

export default NewAnimePosters;
