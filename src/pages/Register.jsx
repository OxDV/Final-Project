import React from "react";
import "../styles/pages/register.scss";
import SingUp from "../components/auth/SignUp";

export default function Register({ setIsLogin }) {
  return (
    <div className="register-container">
      <SingUp setIsLogin={setIsLogin} />
    </div>
  );
}
