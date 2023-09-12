import React from "react";
import "./main.scss";
import CarouselTitle from "./carouselTitle/CarouselTitle";
import Menus from "./menus/Menus";
import Filter from "./filterAnime/Filter";
import AnimePosters from "./animePosters/AnimePosters";

const Main = () => {
  return (
    <div className="main">
      <div className="mainWrapper">
        <CarouselTitle />
        <Menus />
        <div className="animeList">
          <Filter />
          <div className="animePosters">
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
            <AnimePosters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
