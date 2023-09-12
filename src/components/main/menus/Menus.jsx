import React from "react";
import "./menus.scss";

const Menus = () => {
  return (
    <div className="menus">
      <ul className="menusBlock">
        <li className="item">
          <a href="#">All anime</a>
        </li>
        <li className="item">
          <a href="#">Now watching</a>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
