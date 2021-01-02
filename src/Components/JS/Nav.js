import React, { useState, useEffect } from "react";
import "../Css/Nav.css";
import SearchIcon from "@material-ui/icons/Search";
function Nav() {
  const [show, handleShow] = useState(false);
  const [toggleshow, settoggleshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
      </div>
      <div className="nav__left">
        <div className="nav__Search">
          <SearchIcon onClick={() => settoggleshow(!toggleshow)} />
        </div>
        <div className="nav__inputtrans">
          {toggleshow ? (
            <div>
              <input className="nav__input" placeholder="search"></input>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;
