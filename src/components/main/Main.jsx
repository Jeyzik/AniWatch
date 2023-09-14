import React from "react";
import "./main.scss";
import CarouselTitle from "./carouselTitle/CarouselTitle";
import Menus from "./menus/Menus";
import Filter from "./filterAnime/Filter";
import AnimePosters from "./animePosters/AnimePosters";
import NewAnimePosters from "./newAnimePosters/NewAnimePosters";
import Pagination from "./pagination/Pagination";

const Main = ({ item, setCurrentPage }) => {
  return (
    <div className="main">
      <div className="mainWrapper">
        <CarouselTitle item={item} />
        <Menus />
        <div className="animeList">
          <Filter />
          <div className="animePosters">
            {item.map((item, i) => (
              <AnimePosters
                img={item.animePoster}
                series={item.series}
                name={item.animeName}
                date={item.date}
                geners={item.genres + ","}
                key={i}
              />
            ))}
          </div>
          <Pagination onChangePage={(number) => setCurrentPage(number)} />
          <h3 className="title">New anime on the site</h3>
          <div className="newPosters">
            {item.map((item, i) => {
              if (i < 6) {
                return (
                  <NewAnimePosters
                    img={item.animePoster}
                    date={item.date}
                    geners={item.genres + ","}
                    name={item.name}
                    key={i}
                  />
                );
              }
            })}
          </div>
          <div className="speedBar">
            <a href="#">AniWatch</a>
          </div>
        </div>
        <div className="animeDesc">
          <h1>Watch anime online in HD quality</h1>
          <p>
            Anime lovers always miss the high quality of online viewing and it
            is natural to choose something similar to what they like. Now this
            will not bother you. AnimeStars offers you to watch your favorite
            anime in good quality, add it to your bookmarks and will remember
            for you which episode you stopped at. You can find similar series
            using tags and a special block. Enjoy watching!
          </p>
          <b>The site may contain 18+ materials</b>
        </div>
      </div>
    </div>
  );
};

export default Main;
