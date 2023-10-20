import React, { useState } from "react";
import "../styles/components/header.scss";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../FirebaseData";
import { signOut } from "firebase/auth";
import SwitchTheme from "./SwitchTheme/SwitchTheme";
import { FaBars } from "react-icons/fa";
import { TonConnectButton } from "@tonconnect/ui-react";
export default function Header({ isLogin, setIsLogin }) {
  const [toogleActive, setToogleActive] = useState(false);
  function toogleMenu() {
    setToogleActive(!toogleActive);
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsLogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header-container">
      <div className="header-context-container">
        <div className="logo">
          <Link to="/">
            <img src="./images/logo2.png" alt="" />
          </Link>
        </div>
        <TonConnectButton/>

        <div className="menuToogle" onClick={toogleMenu}>
          <FaBars />
        </div>

        {toogleActive ? (
          <div className="nav-mobile-links">
            <ul onClick={toogleMenu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/why_us">Why Us</Link>
              </li>
              <li>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        ) : null}
        <div className="header-navigation">
          <div className="header-links">
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/why_us">
                  Why Us
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/cryptocurrencies">
                  Cryptocurrencies
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="authorization-buttons">
            {isLogin ? (
              <ul>
                <li>
                  <NavLink className="login-link" to="/account">
                    Account
                  </NavLink>
                </li>
                <li>
                  <Link
                    className="register-link"
                    to="/"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink className="login-link" to="/login">
                    Log In
                  </NavLink>
                </li>
                <li>
                  <NavLink className="register-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <SwitchTheme/>
        </div>
      </div>
    </div>
  );
}
