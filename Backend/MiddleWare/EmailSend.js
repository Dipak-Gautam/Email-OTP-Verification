import {
  Verification_Email_Template,
  Welcome_Email_Template,
} from "../Template/EmailTemplate.js";
import { transporter } from "./Email.config.js";

export const SendVerificationCode = async (email, verificationCode, res) => {
  try {
    const response = await transporter.sendMail({
      from: '"Cosmic 👻" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Email Verification",
      html: Verification_Email_Template.replace(
        "{verificationCode}",
        verificationCode
      ),
    });
    res
      .status(200)
      .json({ message: "Otp sent sucessfully", otp: verificationCode });
  } catch (error) {
    console.log("email error", email);
    res.status(200).json("Email cannot be sent");
  }
};

export const sendWelcomeMessage = async (email, name, res) => {
  try {
    const response = await transporter.sendMail({
      from: '"Cosmic 👻" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Welcome Message",
      html: Welcome_Email_Template.replace("{name}", name),
    });
    res.status(200).json("Welcome message sent sucessfully");
  } catch (error) {
    console.log("email error", error);
    res.status(200).json("Welcome message cannot be sent");
  }
};
