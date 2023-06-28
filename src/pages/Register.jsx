import React from "react";
import "../styles/pages/register.scss";
import SingUp from "../components/auth/SignUp";

export default function Register({ setIsLogin, isLogin }) {
  return (
    <div className="register-container">
      <SingUp setIsLogin={setIsLogin} isLogin={isLogin} />
    </div>
  );
}
