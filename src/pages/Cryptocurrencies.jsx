import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/pages/cryptocurrencies.scss"
import Loader from '../components/Loader';

export default function Cryptocurrencies() {
  const [coins, setCoins] = useState([]);
  const [coinsInfo, setCoinsInfo] = useState([]);

  // function getCoins() {
  //   if (coins.length > 0) {
  //     const intervalId = setInterval(() => {
  //       axios
  //         .get(
  //           "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
  //         )
  //         .then((res) => {
  //           setCoins(res.data);
  //           console.log(coins);
  //         });
  //     }, 10000);
  //     return () => clearInterval(intervalId);
  //   } else {
  //     axios.get(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
  //     )
  //     .then((res) => {
  //       setCoins(res.data);
  //     });
  //   }
    
  // }

  // useEffect(() => {
  //   getCoins();
  // }, []);

  useEffect(() => {
    if (coins.length > 0) {
      const updatedCoinsInfo = coins.map((coin) => {
        return {
          name: coin.name,
          price_change_percentage_24h: coin.price_change_percentage_24h,
          current_price: coin.current_price,
          market_cap: coin.market_cap,
          id: coin.market_cap_rank
        };
      });
      setCoinsInfo(updatedCoinsInfo);
      console.log(updatedCoinsInfo);
    }
  }, [coins]);

  return (
    <div className='cryptocurrencies-container'>
      {coinsInfo.length > 0 ? (
      coinsInfo.map((coin) => (
        <ul key={coin.id}>
          <li>{coin.id}</li>
          <li>{coin.name}</li>
          <li>{coin.price_change_percentage_24h}</li>
          <li>{coin.current_price}</li>
          <li>{coin.market_cap}</li>
        </ul>
      ))
      ) : (
        <Loader/>
      )}
    </div>
  );
}
