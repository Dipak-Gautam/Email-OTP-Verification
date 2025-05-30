import express, { response } from "express";
const router = express.Router();
import User from "../modals/User.js";
import { jwtAuthMiddleWare, generateJWtToken } from "../jwt.js";

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
    const code = { id: response.id, timestamp: Date.now() };
    const secretCode = generateJWtToken(code);
    const token = generateJWtToken(payload);
    newUser.secretCode = secretCode;
    await newUser.save();

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
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    const token = generateJWtToken(payload);
    res.status(200).json({
      message: "Login Sucessfully",
      token: token,
      response: user,
    });
  } catch (error) {
    console.log("login", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

router.post("/password", jwtAuthMiddleWare, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
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

router.delete("/delete", jwtAuthMiddleWare, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("delete", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});

export default router;
