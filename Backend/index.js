import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./db.js";
import { jwtAuthMiddleWare } from "./jwt.js";
import userRoutes from "./routes/userRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello from otp server");
});

app.use("/user", userRoutes);
app.use("/email", jwtAuthMiddleWare, emailRoutes);

const router = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
