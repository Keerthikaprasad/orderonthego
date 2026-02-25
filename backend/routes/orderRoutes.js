const router = require("express").Router();
const Order = require("../models/Order");
const { auth } = require("../middleware/auth");

// Place order
router.post("/", auth, async (req, res) => {
  const { customerName, address, paymentMethod, items, total } = req.body;

  const eta = 20 + Math.floor(Math.random() * 25); // instant ETA
  const order = await Order.create({
    userId: req.user.id,
    customerName,
    address,
    paymentMethod,
    items,
    total,
    etaMinutes: eta
  });

  res.json({
    message: "✅ Order confirmed!",
    etaMinutes: eta,
    orderId: order._id
  });
});

// My orders
router.get("/my", auth, async (req, res) => {
  const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(orders);
});

module.exports = router;