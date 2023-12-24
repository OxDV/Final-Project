import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Account.scss";
import { auth } from "../FirebaseData";
import { useState } from "react";
import { Input, Button } from "antd";
import { ConfigProvider, Table } from "antd";

const { Search } = Input;
const columns = [
  {
    title: "Transaction Hash",
    dataIndex: "transaction_hash",
    key: "transaction_hash",
    render: (text) => (
      <a href={`https://etherscan.io/tx/${text}`} target="_blank" rel="noopener noreferrer">{text}</a>
    )
  },
  {
    title: "Method",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
  {
    title: "Txn Fee",
    dataIndex: "txn_fee",
    key: "txn_fee",
  },
];
const methodNames = {
  "0xd0e30db0": "Deposit",
  "0xa9059cbb": "Transfer",
  "0x5f575529": "Swap",
  "0x": "Transfer",
  "0x12aa3caf": "Swap",
  "0x095ea7b3": "Approve",
};

export default function Account({ isLogin }) {
  const navigate = useNavigate();
  const apiKey = "WTAXHN5Z58NVDAEEK9Z3PKYYH349KYNE2G";
  const [balance, setBalance] = useState("");
  const [enterWallet, setEnterWallet] = useState(false);
  const [address, setAddress] = useState("");
  const [transactions, setTransaction] = useState([]);
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
          const ethBalance = data.result / 1e18;
          setBalance(ethBalance.toFixed(3));
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log("Error fetching balance", error);
      });
  }

  function getTransactions(address) {
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.status === "1") {
          const transformedData = data.result.map((item) => {
            const value = item.value / 1e18;
            const gasPrice = item.gasPrice / 1e18;
            const methodName = methodNames[item.methodId] || item.methodId;
            return {
              transaction_hash: item.hash,
              method: methodName,
              age: formatTimestamp(item.timeStamp),
              timeStamp: parseInt(item.timeStamp),
              from: shortenAddress(item.from),
              to: shortenAddress(item.to),
              value: `${value.toFixed(3)} ETH`,
              txn_fee: `${gasPrice.toFixed(10)} ETH`,
            };
          });
          transformedData.sort((a, b) => b.timeStamp - a.timeStamp);
          setTransaction(transformedData);
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log("Error fetching transactions", error);
      });
  }

  function formatTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  }

  function shortenAddress(address, first = 10, last = 10) {
    return `${address.slice(0, first)}...${address.slice(-last)}`;
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleGetBalance(address) {
    getBalance(address);
    getTransactions(address);
  }

  function disconectWallet() {
    setAddress("");
    setTransaction([]);
    setBalance("")
    setEnterWallet(false)
  }

  const onConnect = () => {
    setEnterWallet(false);
    if (window.ethereum){ 
      window.ethereum.request({method: "eth_requestAccounts"}).then((account) => {
        setAddress(account[0]);
        handleGetBalance(account[0]);
      })
    } else {
      alert("Please install Metamask")
    }
  }

  return (
    <div className="account-container">
      <ConfigProvider
        theme={{
          components: {
            Table: {
              colorBgContainer: "var(--bg-color)",
              headerBg: "var(--bg-color)",
              colorText: "var(--white-color)",
              headerColor: "var(--white-color)",
              rowHoverBg: "#82828240",
            },
            Button: {
              colorText: "var(--white-color)",
            },
          },
        }}
      >
        <div className="account-content-container">
          <div>
            <h1 className="title-account">
              Welcome, {auth.currentUser ? auth.currentUser.email : null}!
            </h1>
            {!balance ? (
              <div id="connect-wallet-buttons">
                {enterWallet ? (<Search
                  placeholder="Enter your ETH address"
                  onChange={handleAddressChange}
                  onSearch={handleGetBalance}
                  style={{ width: 400 }}
                />) : <Button onClick={() => setEnterWallet(true)}>Enter Wallet</Button>}
                <Button onClick={onConnect}>Connect Wallet</Button>
              </div>
            ) : (
              <Button onClick={disconectWallet}>Disconnect Wallet</Button>
            )}

            {balance && <h3>Your Balance: {balance} ETH</h3>}
            {balance && (
              <>
                <h4>Your transaction history:</h4>
                <Table columns={columns} dataSource={transactions} />
              </>
            )}
            <br />
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
