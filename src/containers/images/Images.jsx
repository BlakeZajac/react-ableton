import React from "react";
import "./images.scss";

const Images = ({
  sectionClass,
  imageOne,
  imageTwo,
  imageThree,
  classNameOne,
  classNameTwo,
  classNameThree,
}) => {
  return (
    <div className={`images section ${sectionClass}`}>
      <div className="images__wrapper row">
        <div className="images__wrapper__items">
          <img src={imageOne} alt="" className={classNameOne} />
          <img src={imageTwo} alt="" className={classNameTwo} />
        </div>

        <div className="images__wrapper__items">
          <img src={imageThree} alt="" className={classNameThree} />
        </div>
      </div>
    </div>
  );
};

export default Images;
