import React from "react";
import "../styles/components/congratulation.scss";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Congratulation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="congratulation-container">
      <div className="congratulation-content-container">
        {/* <img src="./images/Congratulation.gif" alt="" /> */}
        <img className="rocket" src="./images/howItWork2.png" alt="" />
        <h1>Congratulations, the transaction is already on its way!</h1>
      </div>
    </div>
  );
}
