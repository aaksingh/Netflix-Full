import React from "react";
import JsonData from "../../fixtures/jumbo.json";
import Jumbo from "./Jumbotron";
import Footer from "./Footer.js";
import Toggle from "./Toggle";
import Email from "./Email";
import Banner from "./Banner";
import "../Css/Email.css";
function Home() {
  return (
    <div className="home">
      <Banner />

      {JsonData.map((item) => (
        <Jumbo
          id={item.id}
          title={item.title}
          subtitle={item.subTitle}
          image={item.image}
          direction={item.direction}
        />
      ))}
      <div className="home__toggle">
        <Toggle />
      </div>
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
