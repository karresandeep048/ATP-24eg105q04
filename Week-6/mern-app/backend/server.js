import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

const app = exp();

app.use(cors({ 
  origin: [
    "http://localhost:5173",
    "https://mernapp-gray.vercel.app"
  ] 
}));
app.use(exp.json());
app.use("/emp-api", empRoute);

const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);  // ✅ changed to DB_URL
    console.log("DB connected");

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

  } catch (err) {
    console.log("Error in DB connection:", err.message);
    process.exit(1);
  }
};

connectDB();

app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);
  res.status(err.status || 500).json({ message: "error", reason: err.message });
});