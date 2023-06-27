import {
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import "../../styles/components/signIn.scss";
import { Link, useNavigate } from "react-router-dom";

const SingIn = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginMessage, setLoginMessage] = useState(null);
  const navigate = useNavigate();

  const singIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(null);
        setLoginMessage("Hello, " + email + "!");
        setIsLogin(true);
        navigate("/account");
        console.log(userCredential.user);
      })
      .catch((error) => {
        setError("Wrong Login or Password");
        console.log(error);
      });
  };

  return (
    <div className="sing-in-container">
      <div className="sing-up-field">
        <img src="./images/btc-bg.png" id="btc-bg" alt="" />
        <img src="./images/tz-bg.png" id="tz-bg" alt="" />
        <img src="./images/doge-bg.png" id="doge-bg" alt="" />
        <form className="sign-in-content" action="" onSubmit={singIn}>
          <h1 className="sing-in-title">Log In to your Account</h1>

          <div className="inputBox">
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="">Email</label>
          </div>
          <div className="inputBox">
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="">Password</label>
          </div>

          {error && <p className="error-login">{error}</p>}
          {loginMessage && <p className="login-message">{loginMessage}</p>}
          <button className="submit-button-login" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="signUp-content">
        <p className="signUp-text">Don’t have an account?</p>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default SingIn;
