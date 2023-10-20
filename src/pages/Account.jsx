import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Account.scss";
import { auth } from "../FirebaseData";

export default function Account({ isLogin }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="account-container">
      <div className="account-content-container">
        <div>
          <h1 className="title-account">
            Welcome, {auth.currentUser ? auth.currentUser.email : null}!
          </h1>
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
