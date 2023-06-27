import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account({ isLogin }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1>Acoount</h1>
    </div>
  );
}
