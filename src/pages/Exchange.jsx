import React from "react";
import "../styles/pages/exchange.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Exchange({ coinData, isLogin }) {
  const sellCrypto = localStorage.getItem("sellSelect");
  const buyCrypto = localStorage.getItem("buySelect");
  const sellValue = Number(localStorage.getItem("sellValue"));
  const buyValue = Number(localStorage.getItem("buyValue"));
  let commission = 0;
  let totalSend = 0;
  const navigate = useNavigate();

  if (coinData && sellCrypto && sellValue) {
    {
      commission = sellValue / 20;
      totalSend = sellValue + commission;
    }
  }

  return (
    <>
      {coinData && sellCrypto && buyCrypto && sellValue && buyValue ? (
        <div className="exchange-container">
          <div className="exchange-content-container">
            <div className="exchange-field">
              <form action="">
                <p>
                  You Will Pay:{" "}
                  <span className="color-span">
                    {sellValue} {coinData[sellCrypto].symbol.toUpperCase()}
                  </span>
                </p>
                <p>
                  Сommission:{" "}
                  <span className="color-span">
                    {commission} {coinData[sellCrypto].symbol.toUpperCase()}{" "}
                    (5%)
                  </span>
                </p>
                <br />
                <br />
                <p>
                  You Will Receive:{" "}
                  <span className="color-span">
                    {buyValue.toLocaleString()}{" "}
                    {coinData[buyCrypto].symbol.toUpperCase()}
                  </span>
                </p>
                <div className="inputBox">
                  <input
                    type="text"
                    id="crypto_wallet"
                    name="crypto_wallet"
                    required
                  />
                  <label htmlFor="crypto_wallet">To Crypto Wallet</label>
                </div>
                <br />
                <br />
                <p>
                  Now you need to send{" "}
                  <span className="color-span">
                    {totalSend} {coinData[sellCrypto].symbol.toUpperCase()}
                  </span>{" "}
                  to the address <br />
                  <br />
                  <span className="color-span">
                    0xAC2331E397A9d3dD8b8E56eD643dA248e20033Cd
                  </span>
                  <br />
                  <br />
                  After that, enter the transaction number in the field below
                  and click the confirm button. Order processing takes up to 24
                  hours.
                </p>
                <div className="inputBox">
                  <input
                    type="text"
                    id="transaction-number"
                    name="transaction-number"
                    required
                  />
                  <label htmlFor="transaction-number">Transaction Number</label>
                </div>
                <br />
                <br />
                <a className="confirm-transaction-button" href="">
                  Confirm Transaction
                </a>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="exchange-container">
          <Loader />
        </div>
      )}
    </>
  );
}
