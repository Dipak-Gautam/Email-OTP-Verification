import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const pass = process.env.EmailPass;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "cosmicdevpokhara@gmail.com",
    pass: `${pass}`,
  },
});
