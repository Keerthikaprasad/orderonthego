const router = require("express").Router();
const Product = require("../models/Product");
const { auth, adminOnly } = require("../middleware/auth");

// Get all products (menu)
router.get("/", async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// Admin create product
router.post("/", auth, adminOnly, async (req, res) => {
  const created = await Product.create(req.body);
  res.json(created);
});

// Admin delete product
router.delete("/:id", auth, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;