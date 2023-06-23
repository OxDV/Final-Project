import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import database from "./firebase"; // Import the 'database' object

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import WhyUs from "./pages/WhyUs";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState({});
  const [coinData, setCoinData] = useState("");

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
    }
  }, [data]);

  useEffect(() => {
    console.log(data.lastUpdate);
    const currentTimestamp = Date.now(); // Получить текущую временную метку
    const lastUpdateTimestamp = data.lastUpdate; // Получить временную метку из базы данных

    const differenceInMilliseconds = currentTimestamp - lastUpdateTimestamp;
    const differenceInMinutes = differenceInMilliseconds / 60000;
    if (differenceInMinutes > 1) {
      console.log("Данные старше одной минуты");
      axios
        .get(
          "https://us-central1-final-project-8a9cc.cloudfunctions.net/fetchCoinData"
        )
        .then(() => {
          console.log("Запрос выполнен успешно");
        })
        .catch(() => {
          console.error(Error);
        });
    } else {
      console.log("Данные моложе одной минуты");
    }
  }, [coinData]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={coinData} />} />
          <Route path="/why_us" element={<WhyUs />} />
          <Route
            path="/cryptocurrencies"
            element={<Cryptocurrencies data={coinData} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
