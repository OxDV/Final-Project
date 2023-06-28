import React, { useEffect, useState } from "react";
import "../styles/components/section1.scss";
import Loader from "./Loader";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Section1({ data }) {
  const [isBuyListActive, setisBuyListActive] = useState(false);
  const [isSellListActive, setIsSellListActive] = useState(false);
  const [optionSellSelected, setOptionSellSelected] = useState(0);
  const [optionBuySelected, setOptionBuySelected] = useState(2);
  const [inputBuyValue, setInputBuyValue] = useState("");
  const [inputSellValue, setInputSellValue] = useState("");

  const handleInputSellChange = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const truncatedValue = sanitizedValue.slice(0, 5);
    setInputSellValue(truncatedValue);
  };

  useEffect(() => {
    if (data) {
      const res =
        (inputSellValue * data[optionSellSelected].current_price) /
        data[optionBuySelected].current_price;
      setInputBuyValue(res.toFixed(2));
    }
  }, [inputSellValue, optionSellSelected, optionBuySelected]);

  function openBuyList() {
    setisBuyListActive(!isBuyListActive);
  }

  function closeBuyList() {
    setisBuyListActive(!isBuyListActive);
  }
  function openSellList() {
    setIsSellListActive(!isSellListActive);
  }

  function closeSellList() {
    setIsSellListActive(!isSellListActive);
  }

  function handleOptionSellSelect(value) {
    setOptionSellSelected(value);
    setIsSellListActive(!isSellListActive);
  }
  function handleOptionBuySelect(value) {
    setOptionBuySelected(value);
    setisBuyListActive(!setisBuyListActive);
  }
  useEffect(() => {
    localStorage.setItem("buySelect", optionBuySelected);
  }, [optionBuySelected]);

  useEffect(() => {
    localStorage.setItem("sellSelect", optionSellSelected);
  }, [optionSellSelected]);

  useEffect(() => {
    localStorage.setItem("sellValue", inputSellValue);
  }, [inputSellValue]);

  useEffect(() => {
    localStorage.setItem("buyValue", inputBuyValue);
  }, [inputBuyValue]);

  return (
    <section className="section1-container">
      <div className="section1-content-container">
        <div className="part-with-exchange">
          <div>
            <div className="main-text">
              <h1>Exchange cryptocurrencies for maximum profit</h1>
              <p>
                Get maximum benefit from your transactions with our secure and
                user-friendly cryptocurrency exchange platform. Want to
                experience the best level of service? Our advanced tools and
                features will help you stay ahead of the game.
              </p>
            </div>

            <div className="exchange-menu">
              <div className="choice-of-cryptocurrencies">
                <div className="sell-part">
                  <h3>Sell</h3>
                  <div className="sell-choose-container">
                    <div className="buy-coin">
                      <div className="current-buy-coin">
                        {data && (
                          <>
                            <img src={data[optionSellSelected].image} alt="" />
                            <p>{data[optionSellSelected].name}</p>
                            {isSellListActive == false ? (
                              <FaAngleDown
                                onClick={openSellList}
                                className="open-buy-list"
                              />
                            ) : (
                              <FaAngleUp onClick={closeSellList} />
                            )}
                          </>
                        )}
                      </div>
                      {isSellListActive && (
                        <ul className="list-buy-container">
                          {data ? (
                            data.slice(0, 5).map((elem, index) => (
                              <li
                                className="list-buy-coin"
                                key={index}
                                onClick={() => handleOptionSellSelect(index)}
                              >
                                <img src={elem.image} alt="" />
                                {elem.name}
                                <div className="list-buy-min-amount">
                                  <p>1 {elem.symbol.toUpperCase()}</p>
                                </div>
                              </li>
                            ))
                          ) : (
                            <p>Loading</p>
                          )}
                        </ul>
                      )}
                    </div>
                    <div className="buy-amount">
                      <div className="current-buy-amount">
                        <input
                          type="text"
                          value={inputSellValue}
                          onChange={handleInputSellChange}
                        />
                        {data && (
                          <p>{data[optionSellSelected].symbol.toUpperCase()}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buy-part">
                  <h3>Buy</h3>
                  <div className="buy-choose-container">
                    <div className="buy-coin">
                      <div className="current-buy-coin">
                        {data && (
                          <>
                            <img src={data[optionBuySelected].image} alt="" />
                            <p>{data[optionBuySelected].name}</p>
                            {isBuyListActive == false ? (
                              <FaAngleDown
                                onClick={openBuyList}
                                className="open-buy-list"
                              />
                            ) : (
                              <FaAngleUp onClick={closeBuyList} />
                            )}
                          </>
                        )}
                      </div>
                      {isBuyListActive && (
                        <ul className="list-buy-container">
                          {data ? (
                            data.slice(0, 5).map((elem, index) => (
                              <li
                                className="list-buy-coin"
                                key={index}
                                onClick={() => handleOptionBuySelect(index)}
                              >
                                <img src={elem.image} alt="" />
                                {elem.name}
                                <div className="list-buy-min-amount">
                                  <p>1 {elem.symbol.toUpperCase()}</p>
                                </div>
                              </li>
                            ))
                          ) : (
                            <p>Loading</p>
                          )}
                        </ul>
                      )}
                    </div>
                    <div className="buy-amount">
                      <div className="current-buy-amount">
                        <input type="text" value={inputBuyValue} />
                        {data && (
                          <p>{data[optionBuySelected].symbol.toUpperCase()}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="exchange-button"
                href="/exchange"
                disabled={!inputSellValue}
              >
                Exchange cryptocurrency
              </a>
            </div>
          </div>
          <div>
            <img className="bg-main-img" src="./images/bgmain.png" alt="" />
          </div>
        </div>
        <div className="current-coins-container">
          <div className="current-coin-container">
            {!data
              ? null
              : data.slice(0, 5).map((elem, index) => (
                  <div key={index} className="current-coin-info">
                    <img src={elem.image} alt="" />
                    <p className="id">
                      {elem.current_price.toLocaleString()} USDT
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
