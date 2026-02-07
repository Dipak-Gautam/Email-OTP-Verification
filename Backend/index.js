import express from "express";
import dotenv from "dotenv";
import "./db.js";
import userRoutes from "./routes/userRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import emailConfigRoutes from "./routes/emailConfigRoutes.js";
import customEmailRoutes from "./routes/customEmailRoutes.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
// app.use(
//   cors({
//     origin: "http://192.168.1.69:5173",
//     credentials: true,
//   }),
// );

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello from otp server");
});

app.use("/user", userRoutes);
app.use("/email", emailRoutes);
app.use("/config", emailConfigRoutes);
app.use("/custom", customEmailRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App is running on port ${PORT}`);
});
