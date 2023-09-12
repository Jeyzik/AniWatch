import React from "react";
import "./aside.scss";

import Comments from "./comments/Comments";

const Aside = () => {
  return (
    <div className="aside">
      <ul className="asideMenu">
        <li className="item">
          <a href="#">new items</a>
        </li>
        <li className="item">
          <a href="#">chinese</a>
        </li>
        <li className="item">
          <a href="#">movies</a>
        </li>
        <li className="item">
          <a href="#">anime by genre</a>
        </li>
        <li className="item">
          <a href="#">collections</a>
        </li>
        <li className="item">
          <a href="#">multi-episode</a>
        </li>
        <li className="item">
          <a href="#">top 100 anime</a>
        </li>
        <li className="item">
          <a href="#">on years</a>
        </li>
        <li className="item">
          <a href="#">genres</a>
        </li>
      </ul>
      <div className="tittle">Comments</div>
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
      <div className="tittle">Random Anime</div>
      <div className="randomAnime">
        <div className="wrapperPoster imgMask">
          <a href="#">
            <img src="./img/animePoster.jpg" alt="randomAnime" />
            <div className="description">
              <div className="descTitle">Jujutsu Kaisen</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
