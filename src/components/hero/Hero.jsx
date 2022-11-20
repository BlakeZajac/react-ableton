import React from "react";
import "../../App.scss";
import heroImg from "../../assets/images/header.jpg";
import "./hero.scss";

const Hero = ({ pageHeading }) => {
  return (
    <div className="hero section">
      <div className="hero__container row">
        <div className="hero__image">
          <img src={heroImg} alt="Hero image" />
        </div>

        <div className="hero__title">
          <h1 className="color-orange">{pageHeading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
