const express = require("express");

require("dotenv").config();

const connectDB = require("./config/db");

const app = express();


app.use(express.json());

connectDB();
const cors = require("cors");

app.use(
  cors({
    origin: "https://orderonthego-virid.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors()); // handle preflight

app.get("/", (req, res) => res.send("SB Foods API running ✅"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log("✅ Server started on port", process.env.PORT || 5000);
});