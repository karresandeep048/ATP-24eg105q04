import exp from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import { userApp } from "./APIs/UserAPI.js";
import { commonApp } from "./APIs/CommonAPI.js";
import { adminApp } from "./APIs/AdminAPI.js";
import { authorApp } from "./APIs/AuthorAPI.js";

config();

const app = exp();

app.use(cors({
  origin: "https://atp-24eg105q04.vercel.app",  
  credentials: true
}));

app.use(cookieParser());
app.use(exp.json());

app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("✅ DB connected");
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  }
};

connectDB();

app.use((req, res) => {
  res.status(404).json({ message: `Path ${req.url} is Invalid` });
});

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  res.status(500).json({ message: "Server error", error: err.message });
});
