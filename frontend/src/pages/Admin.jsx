import { useEffect, useState } from "react";
import API from "../api";

export default function Admin() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [promo, setPromo] = useState("");

  const load = async () => {
    const r = await API.get("/products");
    setProducts(r.data);
  };

  useEffect(() => { load(); }, []);

  if (!user?.isAdmin) return <div className="box">Admin only.</div>;

  const addProduct = async () => {
    if (!name || !price) return alert("Name & price required");
    await API.post("/products", { name, description, price:Number(price), image, promo });
    setName(""); setDescription(""); setPrice(""); setImage(""); setPromo("");
    load();
  };

  const del = async (id) => {
    await API.delete(`/products/${id}`);
    load();
  };

  return (
    <div>
      <h2>Admin Dashboard 🛠️</h2>

      <div className="box">
        <h3>Add Product</h3>
        <label>Name</label>
        <input className="input" value={name} onChange={(e)=>setName(e.target.value)} />
        <label style={{marginTop:10}}>Description</label>
        <input className="input" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <label style={{marginTop:10}}>Price</label>
        <input className="input" value={price} onChange={(e)=>setPrice(e.target.value)} />
        <label style={{marginTop:10}}>Image URL</label>
        <input className="input" value={image} onChange={(e)=>setImage(e.target.value)} />
        <label style={{marginTop:10}}>Promo</label>
        <input className="input" value={promo} onChange={(e)=>setPromo(e.target.value)} />
        <hr />
        <button className="btn" onClick={addProduct}>Add</button>
      </div>

      <div className="box" style={{marginTop:12}}>
        <h3>Products</h3>
        {products.map((p) => (
          <div key={p._id} style={{display:"flex",justifyContent:"space-between",padding:10}}>
            <div>
              <b>{p.name}</b>
              <div className="small">₹{p.price} • {p.promo || "No promo"}</div>
            </div>
            <button className="btn outline" onClick={() => del(p._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}