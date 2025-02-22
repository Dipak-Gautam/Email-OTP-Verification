import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database Connected");
});

db.on("error", (error) => {
  console.log("MongoDB connection error :", error);
});

db.on("disconnected", () => {
  console.log("DataBase disconnected");
});

export default db;
