import React from "react";
import "../Css/Banner.css";
function Banner() {
  return (
    <header
      class="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/8c4b79f8-dcfa-46a8-a394-805635611b54/7ce6597b-8473-4d47-b29a-cd8252758252/IN-en-20201221-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
        backgroundPosition: "center center",
      }}
    ></header>
  );
}

export default Banner;
