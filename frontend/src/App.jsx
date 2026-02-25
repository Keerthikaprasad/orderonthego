import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import { getCart } from "./utils/cart";
axios.get("https://orderonthego-2.onrender.com/api/products")

export default function App() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const cartCount = getCart().reduce((s, i) => s + i.qty, 0);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login");
  };

  return (
    <>
      <div className="nav">
        <Link to="/" style={{ fontWeight: 900 }}>SB Foods 🍲</Link>

        <div className="links">
          <Link to="/">Menu</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
          {token && <Link to="/orders">My Orders</Link>}
          {user?.isAdmin && <Link to="/admin">Admin</Link>}

          {!token ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <button className="btn outline" onClick={logout}>Logout</button>
          )}
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}