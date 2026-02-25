import { useState } from "react";
import { getCart, setCart, totalAmount } from "../utils/cart";

import { useNavigate } from "react-router-dom";
import api from "../api";
export default function Checkout() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [confirmMsg, setConfirmMsg] = useState("");

  const items = getCart().map((it) => ({
    productId: it._id,
    name: it.name,
    price: it.price,
    qty: it.qty
  }));

  const total = totalAmount();

  const placeOrder = async () => {
    if (!token) return alert("Login first to place order");
    if (!customerName || !address) return alert("Enter name and address");

    try {
      const res = await API.post("/orders", { customerName, address, paymentMethod, items, total });
      setConfirmMsg(`${res.data.message} ETA: ${res.data.etaMinutes} min`);
      setCart([]);
      setTimeout(() => nav("/orders"), 700);
    } catch (e) {
      alert(e.response?.data?.message || "Order failed");
    }
  };

  return (
    <div className="box">
      <h2>Checkout ✅</h2>

      {confirmMsg && <div className="toast">{confirmMsg}</div>}

      <label>Name</label>
      <input className="input" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} />

      <label style={{marginTop:10}}>Delivery Address</label>
      <input className="input" value={address} onChange={(e)=>setAddress(e.target.value)} />

      <label style={{marginTop:10}}>Payment Method</label>
      <select className="input" value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
        <option value="COD">Cash on Delivery</option>
        <option value="UPI">UPI</option>
        <option value="CARD">Card</option>
      </select>

      <hr />
      <h3>Total: ₹{total}</h3>
      <button className="btn" onClick={placeOrder}>Place Order</button>
    </div>
  );
}