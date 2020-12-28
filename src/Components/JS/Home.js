import React from "react";
import JsonData from "../../fixtures/jumbo.json";
import Jumbo from "./Jumbotron";

function Home() {
  console.log("here");
  return (
    <div className="home">
      {JsonData.map((item) => (
        <Jumbo
          id={item.id}
          title={item.title}
          subtitle={item.subTitle}
          image={item.image}
          direction={item.direction}
        />
      ))}
    </div>
  );
}

export default Home;
