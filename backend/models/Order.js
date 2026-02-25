const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    customerName: { type: String, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },

    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        qty: Number
      }
    ],

    total: { type: Number, required: true },
    status: { type: String, default: "Placed" },
    etaMinutes: { type: Number, default: 30 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);