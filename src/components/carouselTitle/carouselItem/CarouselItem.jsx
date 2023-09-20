import React from "react";
import "./carouselItem.scss";

const CarouselItem = ({ img, name }) => {
  return (
    <div className="carouselItem imgMask">
      <a href="#" className="titleLink">
        <img src={img} alt="anime-poster" />
        <div className="desc">
          <div className="descTitle">{name}</div>
        </div>
      </a>
    </div>
  );
};

export default CarouselItem;
