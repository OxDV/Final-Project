import React from "react";
import "../styles/components/footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-link">
          <div className="left-bar-link">
            <ul>
              <li>
                <Link to="/">Exchange Crypto</Link>
              </li>
              <li>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </li>
              <li>
                <Link to="why_us">Why Us</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="right-bar-link">
            <ul>
              <li>
                <a href="https://t.me/heavy_trend" target="blank">
                  <img src="./images/telegram-icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="mailto:ask@exchange.com">
                  <img src="./images/email-icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/5DaWe1zWDvHziot86" target="blank">
                  <img src="./images/map-icon.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; 2023 eXchange. All rights reserved.</p>
      </div>
    </footer>
  );
}
