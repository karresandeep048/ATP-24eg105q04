import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

connectDB();

app.use(express.json());

app.use("/api", productRoutes);

app.listen(6000, () => {
  console.log("Server running on port 6000");
});