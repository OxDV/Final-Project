import { useEffect } from 'react';
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
  useEffect(() => {
    const fetchData = () => {
      const databaseRef = ref(database); // Reference to the root of your database
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data); // Log the fetched data in the console
      });
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/why_us' element={<WhyUs />} />
          <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
