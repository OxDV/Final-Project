import React, { useState, useEffect } from "react";
import "../styles/components/header.scss";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../FirebaseData";
import { signOut } from "firebase/auth";
import SwitchTheme from "./SwitchTheme/SwitchTheme";
import { FaBars } from "react-icons/fa";
import { TonConnectButton } from "@tonconnect/ui-react";
export default function Header({ isLogin, setIsLogin }) {
  const authorizationWallet = true;
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

  const localTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(localTheme ? localTheme : 'dark');


  return (
    <div className="header-container">
      <div className="header-context-container">
        <div className="logo">
          <Link to="/">
            {theme === 'light'
              ? <img src="./images/logo2lightTheme.png" alt="" />
              : <img src="./images/logo2.png" alt="" />
            }
          </Link>
        </div>
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
              {authorizationWallet ? (
                null
              ) : (<>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>)}



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

          {authorizationWallet ? (
            <ul className="authorization-buttons">
              <li><TonConnectButton /></li>
            </ul>
          ) : (
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
          )}
          <SwitchTheme theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
}
