import React from "react";
import "../../App.scss";
import "./content.scss";

const Content = ({ contentHeading, contentBody }) => {
  return (
    <div className="content section">
      <div className="content__container row">
        <h2>{contentHeading}</h2>
        <p>{contentBody}</p>
      </div>
    </div>
  );
};

export default Content;
