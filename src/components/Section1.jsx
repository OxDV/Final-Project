import React, { useEffect } from "react";
import "../styles/components/section1.scss";
import Loader from "./Loader";

export default function Section1({ data }) {
  // useEffect(() => {
  //   console.log(data);
  // });

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
                  <p>Sell</p>
                  <div className="sell-choose-container">
                    <div>
                      <img src="" alt="" />
                    </div>
                    <div></div>
                  </div>
                </div>

                <div className="buy-part">
                  <p>Buy</p>
                  <div className="buy-choose-container">
                    <div>
                      <img src="" alt="" />
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>

              <a className="exchange-button" href="">
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
            {!data ? (
              <Loader />
            ) : (
              data.slice(0, 5).map((elem, index) => (
                <div key={index} className="current-coin-info">
                  <img src={elem.image} alt="" />
                  <p className="id">
                    {elem.current_price.toLocaleString()} USDT
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
