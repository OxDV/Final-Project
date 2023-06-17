import React, { useEffect, useState } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import '../styles/pages/cryptocurrencies.scss';
import Loader from '../components/Loader';
import database from '../Firebase';

const Cryptocurrencies = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://us-central1-final-project-8a9cc.cloudfunctions.net/checkDataValidity');
      const data = await response.json();
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="cryptocurrencies-container">
      {data && (
        <div className="cryptocurrencies-field">
          <div className="column" id='column-1'>
            <p>#</p>
            {data.slice(0, 10).map((elem, index) => (
              <p key={index} className="id">
                {elem.market_cap_rank}
              </p>
            ))}
          </div>
          <div className="column">
          <p className='span-p'>Name</p>
            {data.slice(0, 10).map((elem, index) => (
              <img key={index} className='coin-img' src={elem.image} alt="" />
            ))}
          </div>
          <div className="column">
          <p></p>
            {data.slice(0, 10).map((elem, index) => (
              <p key={index} className="coin-name">
                {elem.name} • {elem.symbol.toUpperCase()}
              </p>
            ))}
          </div>
          <div className="column">
          <p className='span-p'>Change (24h)</p>
            {data.slice(0, 10).map((elem, index) => (
              <div key={index} className="coin-change">
                {elem.price_change_percentage_24h < 0 ? (
                  <FaCaretDown className="icon-down" />
                ) : (
                  <FaCaretUp className="icon-up" />
                )}
                <p
                  className={`coin-change ${
                    elem.price_change_percentage_24h < 0 ? 'negative' : 'positive'
                  }`}
                >
                  {(elem.price_change_percentage_24h).toFixed(2)}%
                </p>
              </div>
            ))}
          </div>
          <div className="column">
          <p className='span-p'>Price</p>
            {data.slice(0, 10).map((elem, index) => (
              <p key={index} className="coin-price">
                ${elem.current_price.toLocaleString()}
              </p>
            ))}
          </div>
          <div className="column">
          <p className='span-p'>Market Cup</p>
            {data.slice(0, 10).map((elem, index) => (
              <p key={index} className="coin-market-cup">
                ${(Math.round(elem.market_cap / 1000000000)).toLocaleString()}B
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cryptocurrencies;
