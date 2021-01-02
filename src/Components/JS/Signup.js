import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider.js";
import { actionTypes } from "../../reducer";
import { auth, provider } from "../Firebase/Firebase.js";
function Signup() {
  const [email, setEmail] = useState("");
  const [state, dispatch] = useStateValue();

  const [password, setPassword] = useState("");
  const isInvalid = password === "" || email === "";
  const history = useHistory();
  const handleSignin = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        alert(error.message);
      });
  };
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
            <form className="login__form" onSubmit={handleSignin} method="POST">
              <input
                placeholder="Email Address"
                value={email}
                type="text"
                onChange={({ target }) => setEmail(target.value)}
              ></input>
              <input
                placeholder="Password"
                type="password"
                autoComplete="off"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              ></input>
              <input disabled={isInvalid} type="submit"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
