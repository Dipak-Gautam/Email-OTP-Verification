import express from "express";
import dotenv from "dotenv";
import "./db.js";
import { jwtAuthMiddleWare } from "./jwt.js";
import userRoutes from "./routes/userRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello from otp server");
});

app.use("/user", userRoutes);
app.use("/email", emailRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
