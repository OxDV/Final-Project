import React, { useEffect, useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import "../styles/pages/cryptocurrencies.scss";
import Loader from "../components/Loader";
import database from "../Firebase";

const Cryptocurrencies = ({
  data,
  amountCryptocurrencies,
  setAmountCryptocurrencies,
}) => {
  useEffect(() => {
    setAmountCryptocurrencies(100);
  }, [amountCryptocurrencies]);

  return (
    <div className="cryptocurrencies-container">
      {!data ? (
        <Loader />
      ) : (
        <div>
          <h1 id="tittle-cryptocurrencies-page">Cryptocurrencies</h1>
          <div className="cryptocurrencies-field">
            <div className="column" id="column-1">
              <p>#</p>
              {data.slice(0, amountCryptocurrencies).map((elem, index) => (
                <p key={index} className="id">
                  {elem.market_cap_rank}
                </p>
              ))}
            </div>
            <div className="column">
              <p className="span-p">Name</p>
              {data.slice(0, amountCryptocurrencies).map((elem, index) => (
                <img key={index} className="coin-img" src={elem.image} alt="" />
              ))}
            </div>
            <div className="column">
              <p></p>
              {data.slice(0, amountCryptocurrencies).map((elem, index) => (
                <p key={index} className="coin-name">
                  {elem.name} • {elem.symbol.toUpperCase()}
                </p>
              ))}
            </div>
            <div className="column">
              <p className="span-p">Change (24h)</p>
              {data.slice(0, amountCryptocurrencies).map((elem, index) => (
                <div key={index} className="coin-change">
                  {elem.price_change_percentage_24h < 0 ? (
                    <FaCaretDown className="icon-down" />
                  ) : (
                    <FaCaretUp className="icon-up" />
                  )}
                  <p
                    className={`coin-change ${
                      elem.price_change_percentage_24h < 0
                        ? "negative"
                        : "positive"
                    }`}
                  >
                    {elem.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              ))}
            </div>
            <div className="column">
              <p className="span-p">Price</p>
              {data.slice(0, amountCryptocurrencies).map((elem, index) => (
                <p key={index} className="coin-price">
                  $
                  {elem.current_price > 1
                    ? elem.current_price.toLocaleString()
                    : elem.current_price.toFixed(6)}
                </p>
              ))}
            </div>
            <div className="column">
              <p className="span-p">Market Cup</p>
              {data.slice(0, amountCryptocurrencies).map((elem, index) => (
                <p key={index} className="coin-market-cup">
                  {elem.market_cap > 1000000000
                    ? "$" + (elem.market_cap / 1000000000).toFixed(2) + "B"
                    : "$" + (elem.market_cap / 1000000).toFixed(2) + "M"}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cryptocurrencies;
