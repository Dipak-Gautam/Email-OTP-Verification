import express from "express";

import { sendCartProduct } from "../MiddleWare/EmailSend.js";
const router = express.Router();

router.post("/cart-product", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("email recived", email);
    sendCartProduct(email, res);
  } catch (error) {
    console.log("error from cart-product");
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

export default router;
