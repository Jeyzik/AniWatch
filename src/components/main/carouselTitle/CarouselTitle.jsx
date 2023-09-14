import React from "react";
import "./carouselTitle.scss";
import CarouselItem from "./carouselItem/CarouselItem";

const CarouselTitle = ({ item }) => {
  return (
    <div className="carouselTitle">
      <div className="carouselWrapper">
        {item.map((item) => {
          if (item.id <= 6) {
            return (
              <CarouselItem
                img={item.animePoster}
                name={item.animeName}
                key={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default CarouselTitle;
