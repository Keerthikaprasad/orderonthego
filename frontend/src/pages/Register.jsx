import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import API from "../api";

export default function Register() {
  const nav = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    if (!name || !email || !password) return alert("Fill all fields");
    try {
      await API.post("/auth/register", { name, email, password });
      alert("✅ Registered! Now login.");
      nav("/login");
    } catch (e) {
      alert(e.response?.data?.message || "Register failed");
    }
  };
api.post("/api/auth/login", data)
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

      <h2>Register</h2>

      <label>Name</label>
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label style={{ marginTop: 10 }}>Email</label>
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

      <button className="btn" onClick={register}>
        Create Account
      </button>

      <p className="small" style={{ marginTop: 10 }}>
        Already have an account?{" "}
        <Link to="/login">
          <b>Login</b>
        </Link>
      </p>
    </div>
  );
}