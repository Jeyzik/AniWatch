import React from "react";
import "./comments.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Comments = () => {
  return (
    <div className="comments">
      <div className="commentItem">
        <div className="profile">
          <div className="avatar">
            <img src="./img/avatar.jpg" alt="avatar" />
            <span className="author">JeyJey</span>
          </div>
          <div className="publicDate">10.09.23</div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          reprehenderit quia maxime maiores qui voluptates?
        </div>
        <a href="#" className="link">
          <FontAwesomeIcon icon={faArrowCircleRight} />
          <span className="animeName">Arifureto</span>
        </a>
      </div>
    </div>
  );
};

export default Comments;
