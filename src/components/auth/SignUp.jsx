import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import "../../styles/components/signUp.scss";
import { Link, useNavigate } from "react-router-dom";

const SingUp = ({ setIsLogin, isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isDisabled, setDisabled] = useState(false);
  const [weakPassword, setWeakPassword] = useState(null);
  const [signUpMessage, setSignUpMessage] = useState(null);
  const [notSignUpMessage, setNotSignUpMessage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (password.length == 0) {
      setWeakPassword(null);
      setDisabled(true);
    } else if (password.length < 6) {
      setWeakPassword("Password should be  at least 6 characters");
      setDisabled(true);
    } else {
      setWeakPassword(null);
      setDisabled(false);
    }
  }, [password]);

  useEffect(() => {
    if (password !== confirmPassword) {
      setError("Password Mismatch");
      setDisabled(true);
    } else {
      setError(null);
      setDisabled(false);
    }
  }, [confirmPassword]);

  const singUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setNotSignUpMessage(null);
        setIsLogin(true);
        navigate("/account");
        setSignUpMessage("Your account has been created");
      })
      .catch((error) => {
        setSignUpMessage(null);
        setNotSignUpMessage("This account is already registered");
      });
  };

  return (
    <div className="sing-up-container">
      <div className="sing-up-field">
        <img src="./images/btc-bg.png" id="btc-bg" alt="" />
        <img src="./images/tz-bg.png" id="tz-bg" alt="" />
        <img src="./images/doge-bg.png" id="doge-bg" alt="" />
        <form className="sign-up-content" action="" onSubmit={singUp}>
          <h1 className="sing-up-title">Create Account</h1>

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
            {weakPassword && <p className="error-signUp">{weakPassword}</p>}
          </div>
          <div className="inputBox">
            <input
              className="input-field"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="">Confirm Password</label>
            {error && <p className="error-signUp">{error}</p>}
          </div>
          {signUpMessage && <p className="signUp-message">{signUpMessage}</p>}
          {notSignUpMessage && (
            <p className="not-SignUp-message">{notSignUpMessage}</p>
          )}
          <button className="submit-button" type="submit" disabled={isDisabled}>
            Sign Up
          </button>
        </form>
      </div>
      <div className="login-content">
        <p className="login-text">Already have an account?</p>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SingUp;
