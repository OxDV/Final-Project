import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import database from './firebase'; // Import the 'database' object

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cryptocurrencies from './pages/Cryptocurrencies';
import WhyUs from './pages/WhyUs';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';

function App() {
  const [data, setData] = useState({});
  const [coinData, setCoinData] = useState('');
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    const fetchData = () => {
      const databaseRef = ref(database); // Reference to the root of your database
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        setData(data);
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.coinData && data.coinData.length > 0) {
      setCoinData(data.coinData);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    console.log(coinData);
  }, [coinData]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why_us" element={<WhyUs />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies data={coinData} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
