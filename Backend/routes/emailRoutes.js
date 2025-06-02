import express from "express";
import User from "../modals/User.js";
const router = express.Router();
import {
  DefaultVerificationCode,
  SendVerificationCode,
  sendWelcomeMessage,
} from "../MiddleWare/EmailSend.js";
import getRandomNumber from "../Functions/randomFunction.js";
import jwt from "jsonwebtoken";

router.post("/otp", async (req, res) => {
  try {
    const { email, otpDigit, secretCode } = req.body;
    const decoded = jwt.verify(secretCode, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (Number(otpDigit) <= 3 || Number(otpDigit >= 11)) {
      res.status(500).json("The number of otp digit must be between 3 and 10");
      return;
    }
    const otp = getRandomNumber(otpDigit);
    SendVerificationCode(email, otp, res, user);
  } catch (error) {
    console.log("email send error");
    res.status(400).json("Internal server error");
  }
});

router.post("/welcome", async (req, res) => {
  try {
    const { name, email } = req.body;
    sendWelcomeMessage(email, name, res);
  } catch (error) {
    console.log("email send error");
    res.status(400).json("Internal server error");
  }
});

router.post("/otp-verify", async (req, res) => {
  try {
    const { email, otpDigit } = req.body;
    const otp = getRandomNumber(otpDigit);
    DefaultVerificationCode(email, otp, res);
  } catch (error) {
    console.log("OTP verification error");
    res.status(400).json("Internal server error");
  }
});

export default router;
