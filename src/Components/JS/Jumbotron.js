import React from "react";
import "../Css/Jumbotron.css";

function Jumbotron({ id, title, subtitle, image, direction }) {
  console.log();

  return (
    <div className="jumbo__container">
      <div
        className={`${
          direction === "row" ? "jumbo__pane__row" : "jumbo__pane__row__reverse"
        }`}
      >
        <div className="jumbo__pane__data">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="jumbo__pane__data">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
