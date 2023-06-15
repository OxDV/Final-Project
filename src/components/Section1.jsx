import React from 'react'
import "../styles/components/section1.scss"

export default function Section1 () {
  return (
    <section className='section1-container'>
      <div className='section1-content-container'>
        <div className='main-text'>
          <h1>Exchange cryptocurrencies for maximum profit</h1>
          <p>Get maximum benefit from your transactions with our secure and user-friendly cryptocurrency exchange platform. Want to experience the best level of service? Our advanced tools and features will help you stay ahead of the game.</p>
        </div>

        <div className='exchange-menu'>
          <div className='choice-of-cryptocurrencies'>
            <div className='sell-part'>
              <p>Sell</p>
              <div className='sell-choose-container'>
                <div>
                  <img src="" alt="" />
                </div>
                <div>

                </div>
              </div>

            </div>

            <div className='buy-part'>
              <p>Buy</p>
              <div className='buy-choose-container'>
                <div>
                  <img src="" alt="" />
                </div>
                <div>

                </div>
              </div>
            </div>
          </div> 

          <a className='exchange-button' href="">Exchange cryptocurrency</a> 
        </div>
      </div>
    </section>
  )
}
