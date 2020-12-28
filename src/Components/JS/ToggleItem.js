import React, { useState } from "react";
import "../Css/ToggleItem.css";
function ToggleItem({ id, header, body }) {
  const [toggleshow, settoggleshow] = useState(false);
  console.log(toggleshow);
  return (
    <div className="toggleitem">
      <div className="toggleitem__header">
        <h4>{header}</h4>
        <div
          onClick={() => settoggleshow(!toggleshow)}
          className="toggleitem__cross"
        >
          {!toggleshow ? (
            <img src="/images/icons/add.png" alt="close" />
          ) : (
            <img src="/images/icons/close-slim.png" alt="open" />
          )}
        </div>
      </div>
      <div className="toggleitem__body">
        {toggleshow ? <h4>{body}</h4> : null}
      </div>
    </div>
  );
}

export default ToggleItem;
