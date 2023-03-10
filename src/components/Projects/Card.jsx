import React from "react";
import PropTypes from "prop-types";
import { IoIosArrowForward } from 'react-icons/io';

import "./card.css";

function Card({ imageSource, title, text, url, color }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light" id={color}>
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{text}</p>
        <a
          id="button_card"
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          {title} Repository <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
