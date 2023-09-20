import React from "react";
import "./carouselTitle.scss";
import CarouselItem from "./carouselItem/CarouselItem";
import { ItemContext } from "./../../App";

const CarouselTitle = () => {
  // const { item } = React.useContext(ItemContext);
  const item = [
    {
      id: 10,
      animePoster: "./img/animeposter/Shiki-Specials.jpg",
      series: "2",
      animeName: "Shiki Specials",
      date: "2011",
      genres: [
        "Vampires",
        "Detective",
        "Psychological",
        "Supernatural",
        "Shonen",
        "Thriller",
        "Horror",
      ],
    },
    {
      id: 11,
      animePoster: "./img/animeposter/HeavyMetal.jpg",
      series: "15",
      animeName: "Bastard‼ Heavy Metal, Dark Fantasy Season 2",
      date: "2021",
      genres: ["Comedy", "Adventure", "Seinen", "Fantasy", "Action"],
    },
    {
      id: 12,
      animePoster: "./img/animeposter/PrincessPrincipal.jpg",
      series: "1",
      animeName: "Princess Principal: Crown Handler - Chapter 2",
      date: "2021",
      genres: ["Detective", "Historical", "Action"],
    },
    {
      id: 13,
      animePoster: "./img/animeposter/CastleintheMirror.jpg",
      series: "1",
      animeName: "Lonely Castle in the Mirror",
      date: "2022",
      genres: ["Detective", "Drama", "Fantasy"],
    },
    {
      id: 14,
      animePoster: "./img/animeposter/LittleLies.jpg",
      series: "11",
      animeName: "The Little Lies We All Tell",
      date: "2022",
      genres: [
        "Comedy",
        "Everyday",
        "Life",
        "Supernatural",
        "Shonen",
        "Sci-Fi",
        "School",
      ],
    },
    {
      id: 15,
      animePoster: "./img/animeposter/king-game.jpg",
      series: "12",
      animeName: "King's Game",
      date: "2017",
      genres: [
        "Madness",
        "Detective",
        "Drama",
        "Supernatural",
        "Horror",
        "School",
      ],
    },
  ];

  return (
    <div className="carouselTitle">
      <div className="carouselWrapper">
        {item.map((item, i) => (
          <CarouselItem
            img={item.animePoster}
            name={item.animeName}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselTitle;
