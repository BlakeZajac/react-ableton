import React from "react";
import imgOne from "../../assets/images/photo-8.jpg";
import "./cta.scss";

const Cta = () => {
  return (
    <div className="cta section">
      <div className="cta__container row">
        <div className="cta__image">
          <img src={imgOne} alt="Careers Image" />
        </div>

        <div className="cta__content">
          <p>
            We're really proud of the work we've done so far. But there's so
            much more to come. If you'd like to be a part of it, please join us.
          </p>

          <p>
            <a href="#">See latest jobs</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
