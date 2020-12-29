import React from "react";
import "../Css/Banner.css";
import { useHistory } from "react-router-dom";

import Email from "./Email.js";
function Banner() {
  const history = useHistory();
  function login() {
    history.push(`/login`);
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/8c4b79f8-dcfa-46a8-a394-805635611b54/7ce6597b-8473-4d47-b29a-cd8252758252/IN-en-20201221-popsignuptwoweeks-perspective_alpha_website_small.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button onClick={login} className="banner__button">
          Sign In
        </button>
      </div>

      <div className="banner__middle">
        <h2>Unlimited movies, TV{"\n"} shows and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
      </div>
      <div className="banner__email">
        <Email />
      </div>
    </header>
  );
}

export default Banner;
