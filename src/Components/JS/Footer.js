import React from "react";
import "../Css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">
        <p>Questions? Call 000-800-040-1843</p>
      </div>
      <div className="footer__row">
        <div className="footer__row__column">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="footer__row__column">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div className="footer__row__column">
          <p>Account</p>
          <p>Ways to watch</p>
          <p>Coorpotration Info</p>
          <p>Netflix Originals</p>
        </div>
        <div className="footer__row__column">
          <p>Media Centre</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
