import React from "react";
import "../Css/Login.css";
function Login() {
  return (
    <div
      className="login"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/8c4b79f8-dcfa-46a8-a394-805635611b54/7ce6597b-8473-4d47-b29a-cd8252758252/IN-en-20201221-popsignuptwoweeks-perspective_alpha_website_small.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="login__logo">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
      </div>
      <div className="login__login">
        <div className="login__page">
          <div className="login__details">
            <h2>Sign In</h2>
            <div className="login__email">
              <p>Email or Phone number</p>

              <input></input>
            </div>
          </div>
          <div className="login__details">
            <div className="login__email">
              <p>Password</p>

              <input type="password"></input>
            </div>
          </div>
          <button className="login__button">Sign In</button>
          <div className="login__bottom">
            <div className="login__check">
              <input type="checkbox"></input>
              <p>Remember Me</p>
            </div>
            <div className="login__help">
              <p>Need help?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
