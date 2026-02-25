import { useEffect, useState } from "react";
import API from "../api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    API.get("/orders/my").then((r) => setOrders(r.data)).catch(() => {});
  }, [token]);

  if (!token) return <div className="box">Login to see your orders.</div>;

  return (
    <div>
      <h2>My Orders 📦</h2>
      {orders.length === 0 ? (
        <div className="box">No orders yet.</div>
      ) : (
        orders.map((o) => (
          <div className="box" key={o._id} style={{marginBottom:12}}>
            <b>Order: {o._id}</b>
            <div className="small">Status: {o.status} • ETA: {o.etaMinutes} min</div>
            <div className="small">To: {o.customerName}, {o.address}</div>
            <hr />
            {o.items.map((it, idx) => (
              <div key={idx} className="small">{it.name} × {it.qty} = ₹{it.price * it.qty}</div>
            ))}
            <hr />
            <b>Total: ₹{o.total}</b>
          </div>
        ))
      )}
    </div>
  );
}