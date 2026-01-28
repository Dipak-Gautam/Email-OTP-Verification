import express from "express";
import jwt from "jsonwebtoken";
import { sendCartProduct } from "../MiddleWare/CustomEmailSend.js";
import User from "../modals/User.js";
const router = express.Router();

router.post("/cart-product", async (req, res) => {
  try {
    console.log("i am called");
    const { email, secretCode, productName, imageLink, targetLink } = req.body;

    const decoded = jwt.verify(secretCode, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    console.log("user", user);

    sendCartProduct(email, res, productName, imageLink, targetLink, user);
  } catch (error) {
    console.log("error from cart-product");
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

export default router;
