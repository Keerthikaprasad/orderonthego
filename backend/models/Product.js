const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    image: { type: String, default: "" },
    promo: { type: String, default: "" },
    rating: { type: Number, default: 4.2 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);