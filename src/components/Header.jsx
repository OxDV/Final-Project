import React from "react";
import "../styles/components/header.scss"
import { NavLink, Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="header-container">
      <div className="header-context-container">

        <div className="logo">
          <img src="./images/logo2.png" alt="" />
        </div>

        <div className="header-navigation">
          <div className="header-links">
            <ul>
              <li><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li><NavLink className="nav-link" to="/why_us">Why Us</NavLink></li>
              <li><NavLink className="nav-link" to="/cryptocurrencies">Cryptocurrencies</NavLink></li>
              <li><NavLink className="nav-link" to="/contacts">Contacts</NavLink></li>
            </ul>
          </div>

          <div className="authorization-buttons">
              <ul>
                <li><NavLink className="login-link" to="/login">Log In</NavLink></li>
                <li><NavLink className="register-link" to="/register">Register</NavLink></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}