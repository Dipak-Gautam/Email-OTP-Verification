import express from "express";
import User from "../modals/User.js";

const router = express.Router();

router.post("/email-config", jwtAuthMiddleWare, async (req, res) => {
  try {
    const { data } = req.body;
    const user = await User.findById(req.user.id);
    user.emailConfig = data;
    await user.save();
    res.status(200).json({
      message: "Email configuration updated successfully",
      response: User,
    });
  } catch (error) {
    console.log("email configuration error");
    res.status(400).json("Internal server error");
  }
});

export default router;
