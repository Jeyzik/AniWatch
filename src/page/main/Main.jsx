import React from "react";
import "./main.scss";
import AnimePosters from "./animePosters/AnimePosters";
import Pagination from "../../components/pagination/Pagination";
import { ItemContext } from "../../App.jsx";
import CarouselTitle from "../../components/carouselTitle/CarouselTitle";
import Menus from "../../components/menus/Menus";
import Filter from "../../components/filterAnime/Filter";
import NewAnimePosters from "../../components/newAnimePosters/NewAnimePosters";
import { Routes } from "react-router-dom";

const Main = () => {
  const { item, setCurrentPage, setSelectedGenre, sortType, setSortType } =
    React.useContext(ItemContext);

  const bottomItem = [
    {
      id: 20,
      animePoster: "./img/animeposter/WarlordsofSigrdrifa.jpg",
      series: "12",
      animeName: "Warlords of Sigrdrifa",
      date: "2020",
      genres: ["Military", "Action"],
    },
    {
      id: 21,
      animePoster: "./img/animeposter/StarWarsVisions.jpg",
      series: "9",
      animeName: "Star Wars: Visions",
      date: "2021",
      genres: ["Adventure", "Sci-Fi", "Action"],
    },
    {
      id: 22,
      animePoster: "./img/animeposter/KizumonogatariPart1Tekketsu.jpg",
      series: "12",
      animeName: "Kizumonogatari Part 1: Tekketsu",
      date: "2016",
      genres: ["Vampires", "Detective", "Supernatural"],
    },
    {
      id: 23,
      animePoster: "./img/animeposter/Bakuman2ndSeason.jpg",
      series: "25",
      animeName: "Bakuman",
      date: "2021",
      genres: ["Drama", "Comedy", "Romance", "Shounen"],
    },
    {
      id: 24,
      animePoster: "./img/animeposter/ShiYiChangAnMingYueJiShiYou.jpg",
      series: "1",
      animeName: "Shi Yi Chang An: Ming Yue Ji Shi You",
      date: "2020",
      genres: ["Historical", "Romance"],
    },
    {
      id: 25,
      animePoster: "./img/animeposter/EngageKiss.jpg",
      series: "6",
      animeName: "Engage Kiss",
      date: "2021",
      genres: ["Comedy", "Romance"],
    },
  ];

  return (
    <div className="main">
      <div className="mainWrapper">
        <CarouselTitle item={item} />
        <Menus />
        <div className="animeList">
          <Filter
            onClickGenres={(i) => setSelectedGenre(i)}
            onClickSortBy={(i) => setSortType(i)}
          />
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
            {bottomItem.map((bottomItem, i) => (
              <NewAnimePosters
                img={bottomItem.animePoster}
                date={bottomItem.date}
                geners={bottomItem.genres + ","}
                name={bottomItem.name}
                key={i}
              />
            ))}
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
