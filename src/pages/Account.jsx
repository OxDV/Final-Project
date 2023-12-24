import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Account.scss";
import { auth } from "../FirebaseData";
import { useState } from "react";
import { Input } from 'antd';


const { Search } = Input;


export default function Account({ isLogin }) {
  const navigate = useNavigate();
  const apiKey = "WTAXHN5Z58NVDAEEK9Z3PKYYH349KYNE2G";
  const [balance, setBalance] = useState('');
  const [address, setAddress] = useState('');
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  function getBalance(address) {
    const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.status === "1") {
        const ethBalance = data.result / 1e18
        setBalance(ethBalance.toFixed(3))
      } else {
        console.log(data.message);
      }
    })
    .catch((error) => {
      console.log('Error fetching data', error);
      })
  }
    

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleGetBalance(event) {
    getBalance(address)
  }
 
  return (
    <div className="account-container">
      <div className="account-content-container">
        <div>
          <h1 className="title-account">
            Welcome, {auth.currentUser ? auth.currentUser.email : null}!
          </h1>
          <Search placeholder="Enter your ETH address" onChange={handleAddressChange} onSearch={handleGetBalance}/>
          {balance && <h3>Your Balance: {balance} ETH</h3>}
          <br />
          <h3 className="discount-content">
            You have a 10% discount on the commission
          </h3>
        </div>
        <br />
        <br />
        <div>
          <h4>Your transaction history:</h4>
        </div>
        <br />
        <div>
          <ul>
            <li>-You have no transactions</li>
          </ul>
        </div>
        <h3></h3>
      </div>
    </div>
  );
}
