import React from "react";
import faqs from "../../fixtures/faqs.json";
import ToggleItem from "./ToggleItem";
import "../Css/Toggle.css";
import Email from "./Email.js";

function Toggle() {
  return (
    <div className="toggle">
      <div className="toggle__container">
        <div className="toggle__title">
          <h1>Frequntly asked questions</h1>
        </div>
        <div className="toggle__item">
          {faqs.map((item) => (
            <ToggleItem id={item.id} header={item.header} body={item.body} />
          ))}
        </div>
      </div>
      <div className="toggle__email">
        <Email />
      </div>
    </div>
  );
}

export default Toggle;
