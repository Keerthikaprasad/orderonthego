export const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");
export const setCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

export const addToCart = (product) => {
  const cart = getCart();
  const found = cart.find((x) => x._id === product._id);
  if (found) found.qty += 1;
  else cart.push({ ...product, qty: 1 });
  setCart(cart);
  return cart;
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((x) => x._id !== id);
  setCart(cart);
  return cart;
};

export const updateQty = (id, qty) => {
  const cart = getCart();
  const item = cart.find((x) => x._id === id);
  if (item) item.qty = Math.max(1, qty);
  setCart(cart);
  return cart;
};

export const totalAmount = () => getCart().reduce((s, it) => s + it.price * it.qty, 0);