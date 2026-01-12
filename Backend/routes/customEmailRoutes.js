import express from "express";

import { sendCartProduct } from "../MiddleWare/CustomEmailSend.js";
const router = express.Router();

router.post("/cart-product", async (req, res) => {
  try {
    const { email, productName, imageLink, targetLink, name } = req.body;

    sendCartProduct(
      email,
      res,
      productName,
      imageLink,
      targetLink,
      name ? name : ""
    );
  } catch (error) {
    console.log("error from cart-product");
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

export default router;
