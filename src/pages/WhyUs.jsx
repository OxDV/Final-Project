import React from "react";
import "../styles/pages/whyUs.scss";

export default function WhyUs() {
  return (
    <div className="why-us-container">
      <div className="why-us-content">
        <h1 className="why-us-tittel">We are Your Best Choise</h1>

        <div className="why-us-info">
          <div className="why-us-advantages">
            <div>
              <h3>LOW COMMISSIONS</h3>
              <p>
                Maximize Your Crypto Purchases with Our Lowest Possible Fees
              </p>
            </div>
            <div>
              <h3>FAST EXCHANGE</h3>
              <p>
                Receive your crypto quickly, after you complete the payment.
              </p>
            </div>
            <div>
              <h3>WARRANTY</h3>
              <p>
                100% guarantee. The reliability of our service is confirmed by
                numerous reviews.
              </p>
            </div>
            <div>
              <h3>SUPPORT</h3>
              <p>
                Polite technical support around the clock ready to help you on
                any matter.
              </p>
            </div>
          </div>
          <div className="why-us-images">
            <img className="circle-bg" src="./images/circle-bg.svg" alt="" />

            <div className="image-container-first">
              <div className="square-first">
                <img src="./images/low-commissions.png" alt="" />
              </div>
            </div>
            <div className="image-container-second">
              <div className="square-second">
                <img src="./images/service-speed.png" alt="" />
              </div>
            </div>
            <div className="image-container-third">
              <div className="square-third">
                <img src="./images/guarantee.png" alt="" />
              </div>
            </div>
            <div className="image-container-four">
              <div className="square-third">
                <img src="./images/support.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
