import { useEffect, useState } from "react";
import { getCart, removeFromCart, updateQty, totalAmount } from "../utils/cart";
import { useNavigate } from "react-router-dom";
import api from "../api";
export default function Cart() {
  const nav = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => setCart(getCart()), []);
  const total = totalAmount();

  return (
    <div>
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <div className="box">Cart is empty. Add items from Menu.</div>
      ) : (
        <>
          <div className="box">
            {cart.map((it) => (
              <div key={it._id} style={{display:"flex",justifyContent:"space-between",gap:10,padding:10}}>
                <div>
                  <b>{it.name}</b>
                  <div className="small">₹{it.price} each</div>
                </div>

                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <input
                    className="input"
                    style={{width:80}}
                    type="number"
                    value={it.qty}
                    onChange={(e)=>setCart(updateQty(it._id, Number(e.target.value)))}
                  />
                  <button className="btn outline" onClick={()=>setCart(removeFromCart(it._id))}>Remove</button>
                </div>
              </div>
            ))}
            <hr />
            <h3>Total: ₹{total}</h3>
          </div>

          <button className="btn" onClick={() => nav("/checkout")}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}