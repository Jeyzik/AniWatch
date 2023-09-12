import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text">
        Copyright © 2023. Project AniWatch. <br />
        {/* "AniWatch: Dive into Anime Bliss!" */}
        {/* "AniWatch: Your Gateway to Anime Awesomeness!" */}
        {/* "AniWatch: Where Anime Dreams Come to Life." */}
        {/* "AniWatch: Streaming Anime, Crafting Memories." */}
        AniWatch: Unleash Your Inner Otaku!
        {/* "AniWatch: Your Anime Adventure Awaits!" */}
        {/* "AniWatch: Elevate Your Anime Experience." */}
        {/* "AniWatch: Where Every Frame Tells a Story." */}
      </div>
      <div className="btnContainer">
        <a href="#" className="footerBtn">
          Agreement
        </a>
        <a href="#" className="footerBtn">
          Copyright
        </a>
        <a href="#" className="footerBtn">
          All anime
        </a>
      </div>
    </div>
  );
};

export default Footer;
