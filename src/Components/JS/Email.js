import React from "react";

function Email() {
  return (
    <div className="email">
      <div className="email__header">
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
      </div>
      <div className="email__field">
        <div className="email__input">
          <input placeholder="Enter Your Email"></input>
        </div>
        <div className="email__button">
          <button type="button">GET STARTED ></button>
        </div>
      </div>
    </div>
  );
}

export default Email;
