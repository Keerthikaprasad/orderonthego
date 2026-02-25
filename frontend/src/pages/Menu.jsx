import { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../api";
import { addToCart } from "../utils/cart";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [search, setSearch] = useState("");
  const [promoOnly, setPromoOnly] = useState(false);
  const [sortBy, setSortBy] = useState("rating");
  const [toast, setToast] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = () => !!localStorage.getItem("token"); // change key if yours is different

  useEffect(() => {
    setLoading(true);
    API.get("/products")
      .then((r) => setProducts(r.data))
      .catch(() => setErr("Failed to load menu. Check backend is running."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((p) => {
        const name = (p.name || "").toLowerCase();
        const desc = (p.description || "").toLowerCase();
        return name.includes(q) || desc.includes(q);
      });
    }
    if (promoOnly) {
      list = list.filter(
        (p) => (p.promo || "").trim() && (p.promo || "").toLowerCase() !== "no promo"
      );
    }
    if (sortBy === "rating") list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sortBy === "priceLow") list.sort((a, b) => (a.price || 0) - (b.price || 0));
    if (sortBy === "priceHigh") list.sort((a, b) => (b.price || 0) - (a.price || 0));
    return list;
  }, [products, search, promoOnly, sortBy]);

  const handleAdd = (p) => {
    if (!isLoggedIn()) {
      // go login first, then return back to menu
      navigate("/login", { state: { from: location.pathname, action: "addToCart", productId: p._id } });
      return;
    }

    addToCart(p);
    setToast(`✅ Added to cart: ${p.name}`);
    setTimeout(() => setToast(""), 1200);
  };

  return (
    <div>
      {/* ...your same UI... */}

      {!loading && !err && (
        <div className="grid" style={{ marginTop: 14 }}>
          {filtered.map((p) => (
            <div className="card" key={p._id}>
              <img src={p.image || "https://via.placeholder.com/400"} alt={p.name} loading="lazy" />
              <div className="p">
                <h3 style={{ margin: "6px 0" }}>{p.name}</h3>

                <div className="badge">
                  ⭐ {p.rating || 4.2} • ₹{p.price} • {p.promo || "No promo"}
                </div>

                <p className="small">{p.description}</p>

                <button className="btn" onClick={() => handleAdd(p)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}