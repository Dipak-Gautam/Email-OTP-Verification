import express, { response } from "express";
const router = express.Router();
import User from "../modals/User.js";
import { jwtAuthMiddleWare, generateJWtToken } from "../jwt.js";
import { SendVerificationCode } from "../MiddleWare/EmailSend.js";

router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data);
    const response = await newUser.save();
    const payload = {
      id: response.id,
      email: response.email,
      name: response.name,
    };
    const token = generateJWtToken(payload);
    SendVerificationCode(response.email, "12345");
    res.status(200).json({
      response: response,
      token: token,
      message: "Signup sucessfully",
    });
  } catch (error) {
    console.log("signup", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log("user", user);
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    const token = generateJWtToken(payload);
    // SendVerificationCode("anjangautam095@gmail.com", "12345");
    res.status(200).json({
      message: "Login Sucessfully",
      token: token,
      response: response,
    });
  } catch (error) {
    console.log("login", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

router.post("/password", jwtAuthMiddleWare, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    console.log("i am called", req.user);
    const user = await User.findById(req.user.id);
    if (!user || !(await user.comparePassword(oldPassword))) {
      return res.status(400).json({ message: "Password didn't match" });
    }
    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: "password changed sucessfully" });
  } catch (error) {
    console.log("password", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

export default router;
