import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import api from "../api";
export default function Login() {
  const nav = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
api.post("/api/auth/register", data)
  const login = async () => {
    if (!email || !password) return alert("Enter email & password");
    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      const redirectTo = location.state?.from || "/";
      nav(redirectTo);
    } catch (e) {
      alert(e.response?.data?.message || "Login failed");
    }
  };

  const handleClose = () => {
    if (location.state?.from) {
      nav(location.state.from);
    } else {
      nav("/");
    }
  };

  return (
    <div className="box" style={{ position: "relative" }}>
      
      {/* ❌ Close Button */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "transparent",
          border: "none",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        ❌
      </button>

      <h2>Login</h2>

      <label>Email</label>
      <input
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label style={{ marginTop: 10 }}>Password</label>
      <input
        className="input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <hr />

      <button className="btn" onClick={login}>
        Login
      </button>

      <p className="small" style={{ marginTop: 10 }}>
        You haven't registered yet?{" "}
        <Link to="/register">
          <b>Create account</b>
        </Link>
      </p>
    </div>
  );
}