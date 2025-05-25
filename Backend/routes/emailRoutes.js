import express, { response } from "express";
import User from "../modals/User.js";
const router = express.Router();
import {
  SendVerificationCode,
  sendWelcomeMessage,
} from "../MiddleWare/EmailSend.js";
import getRandomNumber from "../Functions/randomFunction.js";

router.post("/otp", async (req, res) => {
  try {
    const { email, otpDigit } = req.body;
    if (Number(otpDigit) <= 3 || Number(otpDigit >= 11)) {
      res.status(500).json("The number of otp digit must be between 3 1nd 10");
    }
    const otp = getRandomNumber(otpDigit);
    SendVerificationCode(email, otp, res);
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
    const { email, otpDigit, id } = req.body;
    const user = await User.findById(id);
    const otp = getRandomNumber(otpDigit);
    SendVerificationCode(email, otp, res, user);
  } catch (error) {
    console.log("OTP verification error");
    res.status(400).json("Internal server error");
  }
});

export default router;
