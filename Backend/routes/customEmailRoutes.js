import express from "express";
import jwt from "jsonwebtoken";
import { sendCartProduct } from "../MiddleWare/CustomEmailSend.js";
import User from "../modals/User.js";
const router = express.Router();

router.post("/cart-product", async (req, res) => {
  try {
    const { email, secretCode, productName, imageLink, targetLink, variables } =
      req.body;
    const decoded = jwt.verify(secretCode, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    sendCartProduct(
      email,
      res,
      productName,
      imageLink,
      targetLink,
      user,
      variables,
    );
  } catch (error) {
    console.log("error from cart-product");
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

export default router;
